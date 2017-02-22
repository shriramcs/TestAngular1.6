var myApp = angular.module("app",[])
myApp.controller("MainCtrl", function($scope){
  $scope.name = 'Shriram';
  $scope.onSubmit = function(){
    alert("adsf");
  }
  $scope.msg = "hello world";
});

// add a filter
myApp.filter("myUpperFilter", function() {
    return function(input) {
        return input.toUpperCase();
    }
});

// add a directive
myApp.directive("myDctv", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            element.css("background", "yellow");
        });
        element.bind("mouseleave", function() {
            element.css("background", "none");
        });
    }
});
