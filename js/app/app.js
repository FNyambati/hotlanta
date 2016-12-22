angular.module('app', ['ui.router', 'ngCart'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "/routes/home/home.html",
    })
    .state('cart', {
      url: '/cart',
      templateUrl: "/routes/cart/cart.html",
    })
    .state('products', {
      url: '/products',
      templateUrl: "/routes/products/products.html",
    });
});
