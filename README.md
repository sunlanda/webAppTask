# vue使用记录


### 基本使用
    var app =new Vue ({
        el:"#element",
        data:{
        
        },
        methods:{
    
        }
      })

>引入vue.js 在html中定义被vue接管的区域(#element)
>创建js 并在new Vue对象中输入定值 data/method/component等来写数据/事件/模板等
>在dom元素中加入对应的vue指令v-bind v-text/html v-model v-if v-for来控制内容
>html中{{}}渲染的值都来自于data  常见场景就是请求到数据回填到页面 
