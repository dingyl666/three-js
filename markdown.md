 # 我是一集标题
 ## 我是二级标题
 ### 我是三级标题
 #### 四级标题
 ##### 五级标题
 ###### 六级标题   
 *斜体文本*    
 _粗体文本_   
 **粗体文本**  
 __粗体文本__   
 ***粗斜体文本***
 ___粗斜体文本___   

# 无序列表* + - 
 * 列表*
 * 列表*
 * 列表*
 + 列表+
 - 列表-

 # 有序列表是有数字加.
 1. 有序列表1
 2. 有序列表2
 3. 有序列表3


 # 有序无序列表嵌套

 * 无序列表1:
     1. 有序列表1 :
         - 无序列表3
         + 无序列表4
     2. 有序列表2
 + 无序列表2 

 # md区块 >

 > 区块1   
 > 区块2   
 > 区块3   
 > 区块一级    
 > > 区块2级   
 > > > 区块3级   

 > 区块中使用列表
 1. list1 
 2. list2
 - list3
 - list4 
 # 代码区块
 ## 段落上的函数或者代码片段可以使用反引号包裹起来
 - `console.log(111)` 反引号代码片段
 ## 代码区块使用四个空格或者tab制表符
    console.log('table') //代码区块使用tab键
    console.log('代码区块2');

## 使用三个反引号包裹一段代码再指定对应语言 eg：```javascript 

```javascript 
class Person {
    name = '' ;
    gae = '' ;
    constructor() {
        this.name = 'dyl' ;
        this.age = 20 ;
    }
}
const obj = new Person() ;
console.log(obj.name) ;
```

# 链接 *[链接名称](链接地址)* ;

- 这是一个链接[菜鸟教程](https://www.runoob.com)

# 图片
- ![图片替代文字](https://oss.gsteps.cn/allfile/admin/8934eb57-7463-4d4e-aec6-63e329c2ae4a-1684573224707.svg)
- ![图片替代文字](htgkzasfgkgml)
- 这个链接用 1 作为网址变量 [RUNOOB][1].
然后在文档的结尾为变量赋值（网址）

[1]: http://static.runoob.com/images/runoob-logo.png

# table 使用｜来分割单元格 使用-来分割表头
| 左对齐 | 右对齐 | 居中对齐 |
| :--- | ---: | :---: |
| body | body | body |
| body | body | body |

# md支持html语法
<p>这是一个p标签 </p>
<i>i标签</i>
<p></p>
<img src="https://oss.gsteps.cn/allfile/admin/8934eb57-7463-4d4e-aec6-63e329c2ae4a-1684573224707.svg" />
<b>b标签</b>
<ul>
    <li>ul-li</li>
    <li>ul-li</li>
</ul>

<ol>
    <li>ol-li</li>
    <li>ol-li</li>
</ol>


