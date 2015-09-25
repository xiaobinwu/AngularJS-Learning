function Cntl1($window, $scope){
  $scope.name = 'World';//实现数据双向绑定
  $scope.greet = function() {
    ($window.mockWindow || $window).alert('Hello ' + $scope.name);
  }
}