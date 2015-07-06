/* global escape */

(function () {
	var app = angular.module('services', []);
	var apiURI = 'http://www.comicvine.com/api/';
	var apiKey = '6cd40af34d84d02a4607bddec70b1c305193be14';

	var setFinalRequest = function (query) {
		return query + '&api_key=' + apiKey + '&format=json';
	}

	app.factory('searchService', ['$http', function ($http) {

		var searchService = {
			getCharacter: function (query) {
				query = escape(query);
				var finalRequest = setFinalRequest(apiURI + 'characters/?filter=name:' + query);
				return $http.get(finalRequest);
			}
		};

		return searchService;
	}]);
})();