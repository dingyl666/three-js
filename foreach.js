

Array.prototype.forEachModel = function(fn){
    if(typeof fn !=='function'){
        throw new Error(fn+' is not a fun !')
    }
    const length = this.length;
    let k = 0;
    while(k<length){
        if(this.hasOwnProperty(k)){
            // fn.call(this[k],k)
            fn(this[k])
        }
        k++
    }

}
const arr = [1,2,3,4,5]

// arr.forEachModel((item)=>{
//     console.log(item,'iii')
// })

const str = 'dyl'
Array.prototype.slice(arr,1,4)
console.log(arr)
// console.log(Array.from(str))
class Parent {
    name = 'parent'
    getName(props){
        console.log(this.name,this,props)
    }
}
const obj = new Parent()

const callObj = {
    name:'callParent'
}
// obj.getName(123)
// obj.getName.call(callObj,{p1:123,p2:456})