

const timeObj = {
    length :0,
    contronl:true,
}
const fn = (timeObj) => {
    timeObj.length+=1 ;
    console.log(timeObj.length) ;
    if(timeObj.contronl){
        if(timeObj.length<=10){
            const timer = setTimeout(() => {
                fn(timeObj)
            }, 1000);  
        }else{
            timeObj.contronl = false;
        }
    }else{
        clearTimeOut(timer)
    }
}

fn(timeObj)