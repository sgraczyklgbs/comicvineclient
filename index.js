(function() {
  var app = angular.module('comicVineApp', ['ngRoute', 'ngAnimate', 'controllers']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: '../views/search.html',
        controller: 'searchController'
      })
      .when('/character/:characterId', {
        templateUrl: '../views/character.html',
        controller: 'characterController'
      })
      .otherwise({
        redirectTo: '/search'
      });
  });

	app.directive('errorSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errorSrc) {
          attrs.$set('src', attrs.errorSrc);
        }
      });
    }
  }
});
})();
