function Cntl2($scope) { //$scope注入的作用域
  var exprs = $scope.exprs = [];  //这是通过$scope.创建的数组
  $scope.expr = '3*10|currency'; //添加默认模型属性，对应模板的input框中相对应有模型变量的默认值
  $scope.hello = '小斌开始学习angularJs拉！';
  $scope.addExp = function(expr) {
     exprs.push(expr);//压入数组(push)
  };

  $scope.removeExp = function(index) {
    exprs.splice(index, 1); //删除某个数组项(splice)
  };
}

//模型和视图分离，但是他们两者确实是同步的