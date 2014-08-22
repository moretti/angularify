var _ = require('lodash');

function HelloController($http) {
  this.message = 'Loading...';
  this.load();
}

HelloController.prototype.load = function() {
  this.$http.get('package.json')
    .then(function(response) {
      this.message = response.data.name;
      return response;
    })
    .catch(console.error);
};

module.exports = HelloController;
HelloController.$name = 'HelloController';
HelloController.$inject = ['$http', 'testSrv'];
require('angular').module('myApp').controller('HelloController', HelloController);
