# learn_vue
vue_first
## 1.vue的引入（script） 
```
   <script src="./vue.js"></script>
```
## 2.vue 挂载点 模板  实例  方法
```
    <div id="root"> ->挂载点
	    <!---->模板
	    <div v-on:click="handleClick">{{msg}}</div>
    </div>

	<script>
		new Vue({     ->实例
			el:"#root",
			data:{
				msg:"hello world",
                template:"<h1>{{msg}}</h1>"
			},
			methods:{
				handleClick:function(){
					this.msg="vue vue vue";
				}
			}
		})
	</script>
```
## 3.vue指令
  - v-text v-html  {{}}   数据渲染
  - v-on:click=""         事件绑定
       -:click=""   简写 
  - v-bind:title=""       属性绑定
       -:title=""   简写 
  - v-model=""            双向数据绑定
  - v-if=""               控制模块隐藏显示
  - v-for="item in items"              循环列表

## 3.vue计算属性与侦听器
```
    <div id="root">
    	姓：<input v-model="contont1">
    	名：<input v-model="contont2">
    	<div>{{contont}}</div>
    	<div>{{coont}}</div>
    </div>
	<script>
		new Vue({
			el:"#root",
			data:{
				contont1:"",
				contont2:""，
				count:0

			},
			computed:{
				contont:function(){
					return this.contont1 + " " + this.contont2;
				}
			}，
			watch:{
				contont1:function(){
					this.count++
				},
				contont1:function(){
					this.count++
				}，
				contont:function(){
					this.count++
				}
			}
		})
	</script>
```