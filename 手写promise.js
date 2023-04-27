

new Promise((resolve,reject) => {

    setTimeout(() => {
        resolve(111)
    }, 1000);
}).then(res => {
    console.log(res) ;
})

const myPromise = (callback) => {
    
}