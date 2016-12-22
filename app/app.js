angular.module('app', ['ui.router', 'ngCart'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "/routes/home/home.html",
    })
    .state('entertainment', {
      url: '/cart',
      templateUrl: "/routes/entertainment/entertainment.html",
    })
    .state('things-to-do', {
      url: '/things-to-do',
      templateUrl: "/routes/things-to-do/things-to-do.html",
    });
});
