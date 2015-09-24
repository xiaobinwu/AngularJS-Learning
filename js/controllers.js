

var phoneController = angular.module('phoneController',  []); 



phoneController.controller("phone-list-controller",['$scope','People',function($scope,People){


 
	  	 $scope.phones = People.query();  

		// alert(JSON.stringify(data));







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


}]);

phoneController.controller("phone-detail-controller",["$scope",'$routeParams',"People","$location",function($scope,$routeParams,People,$location){

 if($routeParams.phoneId){



	$scope.people = People.get({phoneId: $routeParams.phoneId}, function(data) {
  		 $scope.main_image = data.images[0];
 	 });



	}else{

		$location.path("/phones"); 

	}
	$scope.setImage=function(url){ 
		
		$scope.main_image = url;
	}  

	/*$location使用*/
	console.log($location.absUrl()); //"http://example.com/#/some/path?foo=bar&baz=xoxo" => 完整url
	console.log($location.url()); // "/some/path?foo=bar&baz=xoxo" => url的search部分
	console.log($location.protocol()); // "http" =>协议
	console.log($location.host()); // "example.com" => 主机
	console.log($location.port()); // "80" =>端口号
	//console.log($location.path([path])); //  "/some/path" => 跳转至指定路由
 	console.log($location.search()); //{foo: 'bar', baz: 'xoxo'} => 以对象形式展现，还可以$location.search("foo","yahoo");进行修改
 	console.log($location.hash());  // given url http://example.com/#/some/path?foo=bar&baz=xoxo#hashValue    $location.hash() == "hashValue"
 	//console.log($loaction.state([state])); //返回$location的历史对象
 	//$location.replace() 、 event=> $locationChangeStart、$locationChangeSuccess
 	/*$route的两个属性*/
 	// console.log($route.routes;
 	//current：
 	/*
		controller: The controller constructor as define in route definition.
		locals: A map of locals which is used by $controller service for controller instantiation. The locals contain the resolved values of the resolve map. Additionally the locals also contain:

		$scope - The current route scope.
		$template - The current route template HTML.
 	*/
}]); 