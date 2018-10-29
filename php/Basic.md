# learn-php
# PHP
#### 一 、PHP常见语法
>注,这里只列举常用的PHP语法,更为详细的语法教程可以查阅w3cschool_PHP教程

* 文件定义,注释:
>PHP文件以.php结尾,代码的编写位置在<?php 写在这里?>.注释的写法跟js一致
```
<?php
  //这是单行注释
  /*
      这是多行注释
  */
?>
```
##### PHP变量规则:

    变量以$符号开头，其后是变量的名称
    变量名称必须以字母或下划线开头
    变量名称不能以数字开头
    变量名称只能包含字母数字字符和下划线（A-z、0-9 以及_）
>变量名称对大小写敏感
```
// 变量以`$`符号开头，其后是变量的名称
// 变量名称必须以字母或下划线开头
$a;
$b;
$a1;
$_abc;

// 变量名称不能以数字开头
// 变量名称只能包含字母数字字符和下划线（`A-z`、`0-9` 以及` _`）
// 下面这些是错误的变量定义
$1;
$哈哈;
$^&*;

//变量名称对大小写敏感（`$y` 与`$Y` 是两个不同的变量）
// 下面定义的两个变量是不同的,大写,小写x
$x;
$X;
```
* 数据类型
    
    PHP支持的数据类型包括:字符串,整数,浮点数,布尔,数组,对象,NULLL(注:由于对象中可以使用函数,故对象的语法在下文中会提及)
###### 定义字符串时需要注意:
- 单引号:`` 内部的内容只是作为字符串
- 双引号:"" 如果内部是PHP的变量,那么会将该变量的值解析
* 字符串连接:不同于JavaScript,PHP中使用.进行连接
```
// 字符串
$str = '123';

// 字符串连接
$str2 = '123'.'哈哈哈';

// 字符串

// 整数
$numA = 1; //正数
$numB = -2;//负数

// 浮点数
$x = 1.1;

// 布尔
$a = true;
$b = false;

// 数组
$arr = array('123',123)
```
###### 运算符 
    PHP中的运算符跟JavaScript中的基本一致,用法也基本一致

    算数运算符: +,-,/,*,%
    赋值运算符: x = y,x += y,x -= y 
    
>注:这里列举的并不完全,更为详细的PHP运算符教程请查阅
###### w3cschool_PHP运算符
```
<?php 
$x=10; 
$y=6;
echo ($x + $y); // 输出 16
echo ($x - $y); // 输出 4
echo ($x * $y); // 输出 60
echo ($x / $y); // 输出 1.6666666666667
echo ($x % $y); // 输出 4
?>
```
###### 函数: 
* PHP虽然系统内建了一些函数,但是这不影响我们定义自己的. 函数的作用就是在代码中可以重复使用的语法块,页面加载的时候不会执行,只有在被调用的时候才会执行
```
// 基础语法
function functionName() {
  这里写代码
}

// 无参数 无返回值的函数
function sayhi(){
    echo "Hello World";
}

// 有参数 无返回值的函数
function sayName($name){
    echo $name.'你好哦';
}
// 调用
sayName('小狐狸');

// 有参数,参数有默认值的函数
function sayFood($food='西兰花'){
    echo $food.'好好吃';
}
// 调用
sayFood('西葫芦');// 如果传入参数,就使用传入的参数
sayFood();// 如果不传入参数,直接使用默认值

// 有参数,有返回值的函数
function sum($a,$b){
    return $a+$b
}
sum(1,2);// 返回值为1+2 = 3
```
###### 对象 
* PHP中允许使用对象这种,自定义数据类型. 使用时必须先声明,实例化之后才能够使用
```
// 定义最基础的类
class Fox{

        public $name = 'itcast';
        public $age = 10;
}
$fox = new $fox;
// 对象属性取值
$name = $fox->name;
// 对象属性赋值
$fox->name = '小狐狸';

// 带构造函数的对象
class fox{
    // 私有属性,外部无法访问
    var $name = '小狐狸';
    // 定义方法 用来获取属性
    function Name(){
    return $this->name;
    }
    // 构造函数,可以传入参数
    function fox($name){
    $this->name = $name
    }
}
    // 定义了构造函数 需要使用构造函数初始化对象
    $fox = new fox('小狐狸');
    // 调用对象方法,获取对象名
    $foxName = $fox->Name();
```
###### 内容输出: echo:
* PHP语句直接使用即可,输出字符串 
* print_r():函数输出复杂数据类型,比如数组,对象
```
var_dump():函数输出详细信息，如对象、数组
$arr =array(1,2,'123');

echo'123'; 
// 结果为 123

print_r($arr);
// 结果为 Array ( [0] => 1 [1] => 2 [2] => 123 )

var_dump($arr);
/* 结果为 
    array
  0 => int 1
  1 => int 2
  2 => string '123' (length=3)
*/
```

###### 循环语句: 这里只列举了foreach,for循环
```
// for 循环
for ($x=0; $x<=10; $x++) {
  echo "数字是：$x <br>";
} 

// foreach 循环
$colors = array("red","green","blue","yellow"); 
// 参数1为循环的对象,参数2会将对象的值挨个取出,直到最后
// 如果循环的是对象的话,输出的是对象属性的值
foreach ($colors as $value) {
  echo "$value <br>";
}
输出结果为
/*
red 
green 
blue 
yellow 
*/
```
###### header()函数 
* 用来向客户端(浏览器)发送报头,如果出现中文无法显示,可以尝试在PHP代码顶部添加 如下代码
```
header("content-type:text/html; charset=utf-8");
```

#### 二、PHP_GET数据获取
    在PHP中,如果想要获取通过get方法提交的数据,可以通过$_GET对象来获取(虽然参数在地址栏中可以查看)

* HTML代码: 下面就是一个简单的表单代码,将数据提交到0

##### 1.php,使用get的方式
```
<form action="01.php" method="get" >
  <label for="">姓名:
      <input type="text" name= "userName"></label>
      <br/>
  <label for="">邮箱:
      <input type="text" name= "userEmail"></label>
      <br/>
      <input type="submit" name="">
</form>
```
* PHP代码:
```
<?php 
    echo "<h1>GET_PAGE</h1>";
    echo 'userName:'.$_GET['userName'];
    echo '<br/>';
    echo 'userEmail:'.$_GET['userEmail'];
 ?>
```


##### PHP_POST数据获取
    在PHP中,如果想要获取通过post方法提交的数据,可以通过$_POST对象来获取

* HTML代码: 下面就是一个简单的表单代码,将数据提交到02.php,使用post的方式(注意:代码中的method改为post)
```
<form action="02.php" method="post" >
  <label for="">姓名:
      <input type="text" name= "userName"></label>
      <br/>
  <label for="">邮箱:
      <input type="text" name= "userEmail"></label>
      <br/>
      <input type="submit" name="">
</form>
```
* PHP代码:
```
<?php 
    echo "<h1>POST_PAGE</h1>";
    echo 'userName:'.$_POST['userName'];
    echo '<br/>';
    echo 'userEmail:'.$_POST['userEmail'];
 ?>
```

##### POST&GET错误处理
    当我们直接访问POST&GET页面时由于并没有传递任何数据,会因为$_GET或$_POST不存在对应的key而报错.

###### 处理方式1:
* 使用array_key_exists(key, 数组)函数来进行判断
```
参数1: 要检测的key字符串
参数2: 检验的数组
    if(array_key_exists('name', $_GET)){
        //如果有数据 再去读取
    }else{
        // 反之 可以执行一些 其他的逻辑
    }
```
###### PHP文件上传处理01_$_FILES对象
* 上传文件时html代码中需要进行如下设置:

>在html表单中需要设置enctype="multipart/form-data"
只能post方式 PHP接收文件可以通过$_FILES来获取
HTML代码:
```
<form action="03.fileUpdate.php" method="post" enctype="multipart/form-data">
      <label for="">照片:
          <input type="file" name = "picture" multiple=""></label>
      <br/>
      <input type="submit" name="">
  </form>
```
###### PHP代码01 这部分代码测试$_FILES文件的具体内容
```
<?php  
  sleep(5);// 让服务器休息一会
  print_r($_FILES);
?>
```


* 现象:

- 点击提交后,服务器没有立即出现反应,而是休息了一会sleep(5)
    
- 在wamp/tmp目录下面出现了一个.tmp文件
- .tmp文件一会就被自动删除了
- 服务器返回的内容中,有文件的名字[name] => computer.png,以及上传文件保存的位置D:\wamp\tmp\php3D70.tmp
###### PHP文件上传处理02_文件保存
* 刚刚演示了$_FILES对象的作用,以及PHP接受上传文件时,会先保存在一个临时目录下,那么接下来我们就演示如何将临时目录下面的文件保存起来

* HTML代码: 这部分的代码不需要改变
```
<form action="03.fileUpdate.php" method="post" enctype="multipart/form-data">
      <label for="">照片:
          <input type="file" name = "picture" multiple=""></label>
      <br/>
      <input type="submit" name="">
  </form>
```
* PHP代码 move_uploaded_file()这个函数可以处理文件 w3cSchool_move_uploaded_file函数解释
```
Array ( [picture] => Array ( 
        [name] => computer.png 
        [type] => image/png 
        [tmp_name] => D:\wamp\tmp\php8913.tmp 
        [error] => 0 [size] => 5212 ) 
    )
```
>其中我们需要通过picture(根据表单标签的name属性决定)获取临时文件名以及上传文件名
```
<?php  
    sleep(5);// 让服务器休息一会,方便我们查看上传的临时文件
    // 第一个参数是 规定要移动的文件
    // 第二个参数是 规定文件的新位置
    move_uploaded_file($_FILES['picture']['tmp_name'], './upload/'.$_FILES['picture']['name']);
 ?>
```