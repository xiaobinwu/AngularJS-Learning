//注入服务$http

function PhoneListCtrl($scope,$http){



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

}

// 为了克服压缩引起的问题，只要在控制器函数里面给$inject属性赋值一个依赖服务标识符的数组，就像被注释掉那段最后一行那样：

//PhoneListCtrl.$inject = ['$scope', '$http'];





// 另一种方法也可以用来指定依赖列表并且避免压缩问题——使用Javascript数组方式构造控制器：把要注入的服务放到一个字符串数组（代表依赖的名字）里，数组最后一个元素是控制器的方法函数：

// var PhoneListCtrl = ['$scope', '$http', function($scope, $http) { /* constructor body */ }];



// 当控制器构造的时候，AngularJS的依赖注入器会将这些服务注入到你的控制器中。当然，依赖注入器也会处理所需服务可能存在的任何传递性依赖（一个服务通常会依赖于其他的服务）。

//不要使用‘$’前缀来命名你自己的服务和模型，否则可能会产生名字冲突。