

function AAA(name) {
    const _name = name ; //es5 用闭包实现私有变量 不放到this上即可

    this.name2 = name ;
    this.getName = function () {
        return _name
    }
}


class bbb {
    constructor(){
        const name = '111' ;
        this.getName = () => name ;//同es5 实现私有变量 不放到this上即可 ，缺点是只能放到构造函数里
    }
}

//Symbol 作为对象属性名时不能用.运算符，要用方括号。
//因为.运算符后面是字符串，所以取到的是字符串 key 属性，而不是 Symbol 值 key 属性。
const syname = Symbol('11') ;
const syage = Symbol('11') ;
class ccc {
    constructor() {
        this[syname] = 'dyl' ;
        this[syage] = 20 ;
        this.sss = 'sss' ;
    }

    getName() {
        return this[syname]
    }
}


const cc = new ccc() ;

console.log(cc.sss,cc.syname,cc[syname])

const b = new bbb() ;

console.log(b.getName())
const person = new AAA('Joe');

console.log(person._name,person.name2);