var deutschApp = angular.module('deutschApp', ['ngRoute']);

deutschApp.config(function($routeProvider) {
    $routeProvider
        .when('/dative-verbs', {
            templateUrl : 'dative-verbs.html',
            controller  : 'mainController'
        })
        .when('/declension', {
            templateUrl : 'declension.html',
            controller  : 'mainController'
        })
        .when('/prepositions', {
            templateUrl : 'prepositions.html',
            controller  : 'mainController'
        })
        .when('/tenses-moods', {
            templateUrl : 'tenses-moods.html',
            controller  : 'mainController'
        })
        .otherwise ({
            redirectTo: 'declension'
        });
});

deutschApp.controller('mainController', function($scope, $location, $route) {
    $scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function() {
        $scope.activePath = $location.path();
        console.log($location.path());
    });
});
