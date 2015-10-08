angular.module('animate-css-ngview',['ngRoute','ngAnimate']).
config(['$routeProvider',function($routeProvider){ 
	$routeProvider.when('/Book/:bookId',{
		templateUrl:'book.html',
		controller:'BookCtrl',
		controllerAs:'book'
	}).when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: 'ChapterCtrl',
        controllerAs: 'chapter'
    });

}])

.controller('MainCtrl', ['$route', '$routeParams', '$location',
  function($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}])
.controller('BookCtrl', ['$routeParams', function($routeParams) {
  this.name = "BookCtrl";
  this.params = $routeParams;
}])
.controller('ChapterCtrl', ['$routeParams', function($routeParams) {
  this.name = "ChapterCtrl";
  this.params = $routeParams;
}]);