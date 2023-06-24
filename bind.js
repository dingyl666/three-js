
class My {
    name = 'dyl' ;
    age = 20 ;
    getName = (...arg) => {
        console.log(this) ;
    }
    getName2(...arg){
        console.log(this) ;
    }

    constructor(name,age) {
        this.name = name ;
        this.age = age ;
    }
}

const my = new My('this name','this age') ;
const my2 = new My('this name2','this age2') ;
// my.getName()
// my.getName2()
// my2.getName.call(my,'000')
// my2.getName.apply(my,[111,222])
// my2.getName.bind(my,333,444)()

Array.prototype.myMap = function(callback){
    if(typeof callback !== 'function') {
        throw new Error(callback + '不是function')
    }
    const newArray = [] ;
    const length = this.length ;
    for(let i = 0 ;i<length;i++) {
        newArray.push(callback(this[i])) ;
    }

    return newArray ;
}

const array = [1,2].myMap(pp => ({'myMap':pp})) ;
console.log(array)
