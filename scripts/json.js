'use strict';

var app = angular.module('countryApp', []);

app.controller('CountryCtrl', function ($scope, $http) {

  $scope.changeMessage = function () {
    var jsonPath = $('#url-entry').val();
    $http.get('scripts/' + jsonPath + '.json').success(function (data) {
      $scope.countries = data;
    });
  };
});
//# sourceMappingURL=json.js.map
