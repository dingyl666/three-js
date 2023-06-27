
const useState = (initData) => {
    let a = initData ;
    const click = (b) => {a = b} ;
    return () => {
        a++ ;
        return {
            a,
            click
        }
    }
}

const FF = useState(1) ;

const bb = FF() ;
const cc = FF() ;
const dd = FF() ;
console.log(bb,cc,dd)
const myFunc = () => {
    const aaa = useState(1)(2) ;
    console.log(aaa,111) ;
    const bbb = useState(1)(3) ;
    console.log(bbb,222) ;

}

// myFunc() ;



