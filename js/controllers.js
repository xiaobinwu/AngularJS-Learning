var mayapp = angular.module("MyApp",[],function(){ console.log('AngualrJs Started'); });
var questionModel = { 
  newTitle :'新建试题',
  prviewTitle : '预览试题',
  name:'',
  fraction:'',
  type:'1', 
  options : []
};
//自定义指令
mayapp.directive("fractionNum",function(){ 
  return{
    link:function(scope,elements,attrs,controller){

        elements[0].onkeyup =function(){ 
         if(isNaN(this.value) || this.value<1 || this.value>10){
                            this.style.borderColor = 'red';
                        }
                        else{
                            this.style.borderColor = '';
                        }
        } 

    }
  }
})

//自定义服务
mayapp.factory('tpls',function(){
    return ['tpl1','tpl2','tpl3','tpl4'];
});

//自定义过滤器
mayapp.filter('typeFilter',function(){
     return  function(input){
        return input == '1' ? '单选题' : '多选题';
    }
  
});

mayapp.controller('textC',function($scope,tpls){
  $scope.question = questionModel;
  $scope.arr = tpls;
  $scope.addOption = function(){
      var o = { content:'' };
      $scope.question.options.push(o);
  };
  $scope.delOption = function(index){
      $scope.question.options.splice(index,1);
  };
});