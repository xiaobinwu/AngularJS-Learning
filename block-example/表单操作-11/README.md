
##form.FormController
这里需要了解一下form.FormController,针对angularjs这门语言，本身对表单就有对input的各种验证和状态（有效/无效/无交互/有交互），每个表单指令FormController的创建一个实例。  

其对应方法有：  

`$rollbackViewValue();`  `$commitViewValue();`  `$addControl();`  `$removeControl();`  `$setValidity();`  `$setDirty();`  `$setPristine();`    `$setUntouched();`  `$setSubmitted();`  

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
   
```javascript
    userType: <input name="input" type="text" ng-model="userType" required>
    <tt>userType = {{userType}}</tt><br>
    <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br>
    <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br>
    <tt>myForm.$valid = {{myForm.$valid}}</tt><br> 
    <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br>
    <span class="error" ng-show="myForm.input.$error.required">Required!</span>
    /*每一个form和input都会创建一个表单控制器，于是通过表单和input的[name]来输出状态，然后根据ng-show判断是否输出错误信息*/
```
   