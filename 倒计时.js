

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

// fn(timeObj)

const fn11 = (time) => {
    if(time.includes('上午')){
        time= time.replace('上午','')
      }else if(time.includes('下午')){
        time = time.replace('下午','')
        const timeArr = time.split(':')
        time = `${Number(timeArr[0])+12}:${timeArr[1]}`
      }
      console.log(time,'tt')
}

fn11('下午12:20')
