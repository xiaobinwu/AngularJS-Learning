

var phoneController = angular.module('phoneController',  []); 



phoneController.controller("phone-list-controller",['$scope','$http',function($scope,$http){



	  $http.get("json/phone.json").success(function(data, status, headers, config) {

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

	  // 	.success(function(data, status, headers, config){....})

	  // 	.error(function() {.....});

		$scope.order = 'name';
		$rootscope.query = "AngularJs学习-by  xiaobin!"

}]);

phoneController.controller("phone-detail-controller",["$scope",'$routeParams',"$http",function($scope,$routeParams,$http){

	$http.get("json/"+$routeParams.phoneId+".json").success(function(data, status, headers, config) {

	  	if(status==200){ 
	  			$scope.people = data;   
	  			$scope.main_image = data.images[0];
	  	}
	  }).error(function() {
	  	 	$scope.message = "获取不到此人的详细信息"
	  });

	$scope.setImage=function(url){ 
		
		$scope.main_image = url;
	}  


}]);