var App = angular.module('App', []);

App.controller('TodoCtrl', function($scope, $http) {
  $http.get('../sample.json')
       .then(function(res){
          $scope.todos = res.data;
        });
});
