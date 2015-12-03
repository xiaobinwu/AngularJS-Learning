

var phoneController = angular.module('phoneController',  []); 



phoneController.controller("phone-list-controller",['$scope','$http',function($scope,$http){



	  $http.get("phone.json").success(function(data, status, headers, config) {

	  	if(status==200){ $scope.phones = data;  }

			console.log(status+","+headers+","+config);

			// alert(JSON.stringify(data));

	  });





	  // $http({  

	  // 	url:'...',

	  // 	method:'...',

	  // 	data:'...',

	  // 	params:'...',

	  // 	cache:'...'?

	  //  })

	  // 	.success(function(){....})

	  // 	.error(function() {.....});

		$scope.order = 'name';

}]);
phoneController.controller("phone-detail-controller",["$scope",'$routeParams',function($scope,$routeParams){

	$scope.phoneId = $routeParams.phoneId;

}])