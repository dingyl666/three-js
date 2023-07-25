



/**
 * 简化为数组两个相加 合成一个新的 然后递归 
 */


function twoAdd (arr1,arr2) {
    const aaa = [] ;
    arr1.forEach((element,index) => {
        const findEle = arr2[index] ;
        aaa.push(element+findEle) ;
    });

    return aaa ;
}
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,2,3],
]
//多层for循环 记住 外层跑一次 内层跑全部
const handleTotalRow = (array) => {
    const newArray = [];
    array.forEach(sub => {
        console.log('第一层:'+ sub)
        sub.forEach((num, index) => {
            if(newArray[index]){
                newArray[index] += num;
            }else{
                newArray[index] = num;
            }
            console.log('第二层：', num , newArray)
        
        });
    });

    return newArray ;
}
// const data = handleTotalRow(arr) ;
console.log()
// let index = 0 ;
// function add(current = arr[0]) {
//     const next = arr[index + 1] ;
//     const array = twoAdd(current,next) ;
//     console.log(array)
//     if(index > 0) {
//         return array
//     }
//     index += 1 ;

//     add(array)
// }
// add()

// console.log(add())

const threeArr = [
    [
        [1,2,3],
        [4,5,6],
    ],
    [
        [7,8,9],
        [10,11,12],
    ]
]

const handleThree = (array) => {
    const newArray = [];
    array.forEach(sub => {
        console.log('第一层:', sub)
        sub.forEach((num, index) => {
            console.log('第二层：', num )
            num.forEach(ff => {

                // if(newArray[index]){
                //     newArray[index] += ff;
                // }else{
                //     newArray[index] = ff;
                // }
                console.log('第三层：', num ,ff)
            })
        
        });
    });

    return newArray ;
}

const bb = handleThree(threeArr)

