

let aa = {name:1} ;
const test = (data) => {
    data.name -= 1 ;
    console.log('func:' , data) ;
}
test(aa) ;
console.log(aa)
/**
 * 对象作为形参，传过去的也是引用
 */

