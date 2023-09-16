
const useState = (initData) => {
    let a = initData ;
    const setData = b => (a = b) ;
    const getData = () => a ;
    return function() {
        return {
            a:getData(),
            click:setData
        }
    }
}

const d = useState(1) ;

const data = d() ;
console.log(data.a)
data.click(2) ;
console.log(data.a)
data.click(3) ;
console.log(data.a);

// const bb = FF() ;
// const cc = FF() ;
// const dd = FF() ;
// console.log(bb,cc,dd)
const myFunc = () => {
    const aaa = useState(1)(2) ;
    console.log(aaa,111) ;
    const bbb = useState(1)(3) ;
    console.log(bbb,222) ;

}

// myFunc() ;


//闭包模拟私有方法
const Counter = function () {
    //privateCounter成了私有变量；
    //changeBy成了私有方法
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        },
    };
}

const Counter1 = Counter() ;
const Counter2 = Counter() ;

// console.log(Counter1.value(),'counter1...'); /* logs 0 */
// console.log(Counter2.value()),'counter2...'; /* logs 0 */
// Counter1.increment();
// Counter2.decrement();
// console.log(Counter1.value(),'count1+...'); /* logs 2 */
// console.log(Counter2.value(),'count2-...'); /* logs 1 */



