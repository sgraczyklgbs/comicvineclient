/* global angular */

(function () {
	var app = angular.module('controllers', ['services']);

	app.controller('mainController', function ($scope, searchService) {
		var getCharacter = function (characterName) {
			searchService.getCharacter(characterName)
				.success(function (data) {
				
			})
				.error(function (error) {
				console.log(error);
			});
		};

		$scope.initialize = function () {
			getCharacter('Gree');
		};
	});
})();