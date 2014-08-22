/*exports.getModuleIdentifier = function (ast) {
  var nodes = ast.program.body.filter(matchModuleExports);
  if (nodes.length > 0) {
    var node = nodes[nodes.length - 1];
    var moduleExports = node.expression.right;
    if (moduleExports.type === 'Identifier') {
      return moduleExports.name;
    }
  }
  return null;
};

function matchModuleExports(node) {
  if (node.type === 'ExpressionStatement') {
    var exp = node.expression;
    return exp.type === 'AssignmentExpression' &&
      exp.operator === '=' &&
      exp.left.type === 'MemberExpression' &&
      exp.left.object.name ==='module' &&
      exp.left.property.name ==='exports';
  }
  return false;
}*/

/*function Angularify(ast, opts) {
  this.ast = ast;
}

function transform() {
  var moduleExports = this.getModuleExports();
  var trans = this.getTransformation(moduleExports);
  if (trans !== null) {
    var moduleDef = this.getModuleDefinition(moduleExports, trans);
    var moduleDefAst = recast.parse(moduleDef).program.body[0];
    this.ast.program.body.push(moduleDefAst);
    console.log(recast.print(this.ast).code);
  }
};

Angularify.prototype.getTransformation = function (identifier) {
  for (var i = 0; i < this.opts.transformations.length; i++) {
    var trans = this.opts.transformations[i];
    if (trans.regex.test(identifier)) {
      return trans;
    }
  }
  return null;
};

Angularify.prototype.getModuleDefinition = function (moduleIdentifier, transformation) {
  return util.format('%s.module(\'%s\').%s(\'%s\', %s);', this.opts.angular, this.opts.appName, transformation.type, moduleIdentifier, moduleIdentifier);
};*/
