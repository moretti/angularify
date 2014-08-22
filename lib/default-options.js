module.exports = {
  appName: 'myApp',
  angularIdentifier: 'require(\'angular\')',
  moduleTypes: {
    animation: {
      match: /Animation$/,
      casing: 'paramCase'
    },
    constant: {
      match: /Constant$/,
      casing: 'constant'
    },
    controller: {
      match: /Controller$/,
      casing: 'pascalCase'
    },
    directive: {
      match: /Directive$/,
      casing: 'camelCase'
    },
    factory: {
      match: /Factory$/,
      casing: 'pascalCase'
    },
    filter: {
      match: /Filter$/,
      casing: 'camelCase'
    },
    provider: {
      match: /Provider$/,
      casing: 'camelCase'
    },
    service: {
      match: /Service$/,
      casing: 'camelCase'
    },
    value: {
      match: /Value$/,
      casing: 'camelCase'
    }
  }
};
