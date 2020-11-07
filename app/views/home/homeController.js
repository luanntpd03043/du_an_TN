'use strict';

var myApp=angular.module('myApp.home', ['ngRoute'])

   .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/home', {
      templateUrl: '/app/views/home/home.html',

    })

  }])
  .controller('myCtrl', [function() {

  }]);
  myApp.run(function($rootScope){
      $rootScope.$on("$routeChangeStart", function(){
          $rootScope.loading=true;
      });
      $rootScope.$on("$routeChangeSuccess", function(){
        $rootScope.loading=false;
    });
    $rootScope.$on("$routeChangeError", function(){
        $rootScope.loading=false;
        alert('Lỗi, không tải được tempalte')
    });
  })
