
const array = [
    '饺子',
    "卤肉饭",
    "驴肉火烧",
    "兰州拉面",
    "悠悠稻香",
]
const fn = () => Math.round(Math.random()*(array.length-1))
const newArray = [] ;
for(let i = 0 ;i<10 ;i++) {
    newArray.push(fn()) ;
}
console.log(newArray)