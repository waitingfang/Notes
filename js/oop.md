# OOP

### 面向对象的基本特征有：封装、继承、多态。

#### 创建对象的方法

##### 1. 对象字面量
```
    var obj={
        name:"xiaoming",
        age:18
    }
```
##### 2. 使用构造函数
```
    var obj=new Obiect();
    obj.name="xiaoming";
    obj.age=18;
```
##### 3. 封装简单的工厂函数
```
    function  creatSong(){
        var obj={
            name:"xiaoming",
            age:18
        }
        return obj;
    }
```
##### 4. 自定义的构造函数
```
    function Person(){
        this.name="小明";
        this.age=18;
    }
    var p=new Person();
```