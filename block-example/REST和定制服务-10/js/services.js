 var phoneService = angular.module('phoneService', ['ngResource']);
 
phoneService.factory("People",function($resource){ 
	return $resource('json/:phoneId.json', {}, {
        query: {method:'GET', params:{phoneId:'phone'}, isArray:true}
      });
})