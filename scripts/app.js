var app = angular.module('xmlConverter', ['ngRoute']);

  app.config(['$routeProvider',function($routeProvider) {

    $routeProvider.when('/home', {
      templateUrl : 'pages/home.html',
    })
    .when('/about', {
      templateUrl : 'pages/about.html',
    })
    .otherwise({redirectTo: '/home'});

  }]);

  app.controller('menuCtrl', ['$scope', '$location', function($scope, $location){

    $scope.menuClass = function(page) {
      var current = $location.path().substring(1);
      return page === current ? 'active' : '';
    };

  }]);
  
  app.controller('xmlController', ['$scope', '$http', '$location', function($scope, $http, $location){

    this.submitUrl = function() {
      $('code').removeClass('bg-success');
      var xmlPath = this.user.url;      
      this.clearFields();
      $('body').addClass('loading');
      $http.get(xmlPath)
      .success(function(data, status, headers, config) {
        var x2js = new X2JS();
        var jsonOutput = x2js.xml_str2json( data );
        console.log(jsonOutput.products.product[0]);

        $scope.productList = jsonOutput.products.product;
        $('body').removeClass('loading');
      })
      .error(function(data, status, headers, config) {
        
        $('.product-list li.has-error').append('<span class="help-block">Couldn\'t load the list of products, Please check URL</span>');
        $('body').removeClass('loading');
        $('code').addClass('bg-success');
      
      });

  };

  this.clearFields = function() {

    $('.product-list li').empty();
  
  }

      
  }]); 

  app.controller('aboutCtrl', ['$scope', function($scope){
    //$scope.name = "Test"
  }]); 