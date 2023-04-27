

(
    function() {
        let value = null ;
        const myUseState = (initValue) => {
            const state = value || initValue ;
            const setValue = (changeValue) => {
                value = changeValue ;
            }
            
            return [
                state,
                setValue,
            ]
        }

        const [data,setData] = myUseState(0) ;
        // setInterval(() => {
        //     setData(data+1)
        //     console.log(data,'..')
        // },1000)
       
    }
)()


