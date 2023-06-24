
const useState = (initData) => {
    let a = initData ;
    const click = (b) => {a = b} ;
    return (c) => {
        
        return a+c
    }
}
const myFunc = () => {
    const aaa = useState(1)(2) ;
    console.log(aaa,111) ;
    const bbb = useState(1)(3) ;
    console.log(bbb,222) ;

}

myFunc() ;



