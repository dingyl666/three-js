
const useState = (initData) => {
    let a = initData ;

    return () => {
        const click = (newData) => {
            a = newData ;
        }
        return [a,click]
    }
}
const myFunc = () => {
    const [data,setData] = useState(1)() ;
    console.log(data,111)
    setData(2) ;
    console.log(data,222)

}

myFunc() ;

