/* global angular */

(function() {
  var app = angular.module('controllers', ['services']);

  app.controller('mainController', function($scope, searchService) {
    $scope.initialize = function() {};
  });

  app.controller('searchController', function($scope, $timeout, searchService) {
    // Private
    var searchDelay;

    var getCharacters = function(characterName) {
      searchService.getCharacters(characterName)
        .success(function(data) {
          if (data.error === "OK") {
            $scope.model.characters = data.results;
          }
        })
        .error(function(error) {
          console.log(error);
        });
    };

    // Public
    $scope.model = {
      characterQuery: '',
      characters: []
    };

    $scope.ui = {
      defaultImage: "/images/no-image.png",
      getCharacterImage: function(image) {
        if (image) {
          return image;
        } else {
          return this.defaultImage;
        }
      }
    }

    $scope.handlers = {
      searchCharacter: function() {
        if (searchDelay) {
          $timeout.cancel(searchDelay);
        }
        searchDelay = $timeout(function() {
          console.log("Querying for: " + $scope.model.characterQuery);
          getCharacters($scope.model.characterQuery);
          searchDelay = null;
        }, 500);
      }
    };

    $scope.initialize = function() {};
  });


  app.controller('characterController', function($scope, $routeParams, searchService) {
    // Private
    var getCharacter = function() {
      searchService.getCharacter($scope.model.characterId)
        .success(function(data) {
          if (data.error === "OK" && data.results.length === 1) {
            $scope.model.character = data.results[0];
          }
        })
        .error(function(error) {
          console.log(error);
        });
    };

    // Public
    $scope.model = {
      characterId: -1,
      character: {}
    };

    $scope.initialize = function() {
      $scope.model.characterId = $routeParams.characterId;
      getCharacter();
    };
  });
})();
