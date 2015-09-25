var phoneFilter = angular.module('phoneFilter', []);



phoneFilter.filter("checkHun",function(){ 

	return function(input){ 

		return input ?   '\u2718': '\u2713' ;

	};

});

