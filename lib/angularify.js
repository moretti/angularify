var _ = require('lodash');
var changeCase = require('change-case');
var recast = require('recast');
var through = require('through');
var traverse = require('ast-traverse');
var util = require('util');

var defaultOpts = require('./default-options');

function angularify(file, opts) {
  var fileContent = '';
  opts = _.merge(defaultOpts, opts);

  function write (buf) {
    fileContent += buf;
  }

  function end () {
    var ast = recast.parse(fileContent);
    this.queue(transform(ast, opts));
    this.queue(null);
  }

  return through(write, end);
}

function matchModule(node, opts) {
  if (node.type === 'FunctionDeclaration') {
    for (var moduleType in opts.moduleTypes) {
      if (opts.moduleTypes[moduleType].match.test(node.id.name)) {
        return { match: true, moduleType: moduleType };
      }
    }
  }
  return { match: false };
}

function transform(ast, opts) {
  var matches = [];

  traverse(ast, { pre: function(node, parent, prop, idx) {
    var result = matchModule(node, opts);
    if (result.match) {
      matches.push({ node: node, moduleType: result.moduleType});
    }
  }});

  matches.forEach(function (match) {
    var bootstrapped = bootstrapModule(match.node, match.moduleType, opts);
    astAppend(ast, bootstrapped);
  });

  return recast.print(ast).code;
}

function bootstrapModule(node, moduleType, opts) {
  var moduleIdentifier = node.id.name;
  var moduleName = moduleIdentifier;

  var module = opts.moduleTypes[moduleType];

  if (typeof module.omit === 'string') {
    moduleName.replace(module.omit, '');
  }

  moduleName = changeCase[module.casing](moduleName);

  if (typeof module.suffix === 'string') {
    moduleName += module.suffix;
  }

  if (typeof module.suffix === 'string') {
    moduleName = module.prefix + moduleName;
  }

  return util.format('%s.module(\'%s\').%s(\'%s\', %s);', opts.angularIdentifier, opts.appName, moduleType, moduleName, moduleIdentifier);
}

function astAppend(ast, code) {
  var parsedCode = recast.parse(code);
  ast.program.body.push(parsedCode.program.body[0]);
}

module.exports = angularify;
