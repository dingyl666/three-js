

var str = "abcd test@runoob.com 1234";
var patt1 = /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,6}\b/g;
console.log(str.match(patt1))


const obj = {
    name:111
}

const bbb = obj ;

/**
 * 指针：指针是一个特殊的变量，它里面存储的的数值为内存里的一个地址，通过*访问内存地址所指向的值
引用：引用不是新定义一个变量，而是给已存在变量取了一个别名，编译器不会为引用变量开辟内存空间，它和它引用的变量共用同一块内存空间。
 */
bbb.name = 222 ;
console.log(obj,bbb) ;



