# learn_ajax
## Ajax
### 概念
>在浏览器中,我们也能够不刷新页面,通过ajax的方式去获取一些新的内容,类似网页有微博,朋友圈,邮箱等
#### 同步&异步
- 同步:必须等待前面的任务完成,才能继续后面的任务
- 异步:不受当前任务的影响

#### XMLHttpRequest
>ajax使用的依旧是HTTP请求,那么让我们来回忆一下一个完整的HTTP请求需要什么

    请求的网址,方法get/post
    
    提交请求内容数据,请求主体等
    
    接收响应回来的内容

* 五步使用法:

    1.建立XMLHTTPRequest对象
    
    2.注册回调函数
    
        当服务器回应我们了,我们想要执行什么逻辑
    3.使用open方法设置和服务器端交互的基本信息
    
        设置提交的网址,数据,post提交的一些额外内容
    4.设置发送的数据，开始和服务器端交互
    
        发送数据
        
    5.更新界面
    
        在注册的回调函数中,获取返回的数据,更新界面

>代码如下
* get
```
    <script type="text/javascript">

    // 创建XMLHttpRequest 对象

    var xhr = new XMLHttpRequest();

    // 设置跟服务端交互的信息

    xhr.open('get','01.ajax.php?name=fox');

    xhr.send(null);    // get请求这里写null即可

    // 接收服务器反馈

    xhr.onreadystatechange = function () {

        // 这步为判断服务器是否正确响应

        if (xhr.readyState == 4 && xhr.status == 200) {

            // 打印响应内容

            alert(xhr.responseText);

        } 

    };

</script>
    
```
* post
```
<script type="text/javascript">

    // 异步对象

    var xhr = new XMLHttpRequest();



    // 设置属性

    xhr.open('post', '02.post.php' );



    // 如果想要使用post提交数据,必须添加

    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");



    // 将数据通过send方法传递

    xhr.send('name=fox&age=18');



    // 发送并接受返回值

    xhr.onreadystatechange = function () {

    // 这步为判断服务器是否正确响应

    if (xhr.readyState == 4 && xhr.status == 200) {

           alert(xhr.responseText);

         } 

    };

</script>
```

#### onreadystatechange事件
###### onreadystatechange	
    存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
###### readystate
>存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。

    0: 请求未初始化
    1: 服务器连接已建立
    2: 请求已接收
    3: 请求处理中
    4: 请求已完成，且响应已就绪
###### status
    200: "OK"
    
    404: 未找到页面
#### 服务器响应内容
    responseText	获得字符串形式的响应数据。
    responseXML	    获得 XML 形式的响应数据。

#### 写出一个简单的$.ajax()的请求方式？
```
$.ajax({
    url:'http://www.baidu.com',
    type:'POST',
    data:data,
    cache:true,
    headers:{},
    beforeSend：function(){},
    success:function(){},
    error:function(){},
    complete:function(){}
}); 
```