

const myAsyncFunc = (res,time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(res)
        },time)
    })
}
const generatorFunc = function *() {
    yield myAsyncFunc(111,3000) ;
    yield myAsyncFunc(222,1000) ;
    yield myAsyncFunc(333,2000);
    return 444
}

const p = generatorFunc() ;
// p.next().value.then(res => {
//     console.log(res,'..')
// })

const array = [] ;
const thunk = async (next) => {
    const {done,value} = next ;
    if(done) {
        array.push(value)
        console.log(value ,array,'done')
        return
    } ;
    const res = await value ;
    array.push(res) ;
    console.log(res)
    thunk(p.next())
}

thunk(p.next())