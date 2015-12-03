
##form.FormController
这里需要了解一下form.FormController,针对angularjs这门技术，本身对表单就有对input的各种验证和状态判断（有效/无效/无交互/有交互），每个表单指令FormController的创建一个实例。简单地讲，FormController跟踪所有的控制和嵌套形式以及它们的状态,如被有效/无效或无交互/交互。  

其对应方法有：  

`$rollbackViewValue();`  `$commitViewValue();`  `$addControl();`  `$removeControl();`  `$setValidity();`  `$setDirty();`  `$setPristine();`    `$setUntouched();`  `$setSubmitted();`    

这些方法一般是使用于自定义验证上，也就是编写自定义指令来验证自己的内容或是表单事件处理器上，如：  


```javascript
    angular.module('cancel-update-example', [])

    .controller('CancelUpdateController', ['$scope', function($scope) {
      $scope.resetWithCancel = function(e) {
        if (e.keyCode == 27) {
          $scope.myForm.myInput1.$rollbackViewValue();  //可以就把$scope理解成ng-controller下的整个作用域，于是就可以调用$scope.myForm.myInput1
          $scope.myValue = '';
        }
      };
      $scope.resetWithoutCancel = function(e) {
        if (e.keyCode == 27) {
          $scope.myValue = '';
        }
      };
    }]);
```


其对应属性：   

`$pristine` boolean

`$dirty`  boolean

`$valid`  boolean

`$invalid`  boolean

`$submitted`   boolean

`$error`  Object

        email
        max
        maxlength
        min
        minlength
        number
        pattern
        required
        url
        date
        datetimelocal
        time
        week
        month    
   
   以上$error是一个对象，里面有各种错误类型，可使用于form和input，配合ng-show使用，就可做到验证，可以像下面一样去使用：  
   
```html
    userType: <input name="input" type="text" ng-model="userType" required>
    <tt>userType = {{userType}}</tt><br>
    <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br>
    <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br>
    <tt>myForm.$valid = {{myForm.$valid}}</tt><br> 
    <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br>
    <span class="error" ng-show="myForm.input.$error.required">Required!</span>
    /*每一个form和input都会创建一个表单控制器，它们是通过指令和ngModel了，使用表单和input的[name]的引用来输出状态，然后根据ng-show判断是否输出错误信息*/
```
   