
const model = (id, num) => {
    return {
        id, num
    }
}

const arr = [
    model(0, 1),
    model(1, 3),
    model(2, 1),
    model(0, 0),
    model(1, 2),
    model(2, -1),
]
// console.log(arr.sort((a,b)=>{
//     const value1 = a.id ,
//     value2 = b.id
//     if(value1===value2){
//         return a.num -b.num
//     }
//     return value1-value2
// }))
// console.log(arr.sort((a, b) => a.num - b.num))
console.log(arr.sort((a, b) => a.num - b.num).sort((a, b) => a.id - b.id))
// console.log(arr)