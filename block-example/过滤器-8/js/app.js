
var phonecat = angular.module('phonecat',  ['ngRoute','phoneController','phoneFilter']);  //[....]依赖注入

phonecat.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when("/phones",{templateUrl:"tpls/phones-list.html",controller:"phone-list-controller"}).
		when("/phones/:phoneId",{templateUrl:"tpls/phones_detail.html",controller:"phone-detail-controller"}).
		otherwise({redirectTo:"/phones"});
}])


