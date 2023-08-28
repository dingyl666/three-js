

const array = [1,2] ;

const array2 = [1,4,2] ;



console.log(
    array2.map(mm => {
        if(array.includes(mm)){
            return `id=${mm}`
        }
    }).filter(ff => !!ff).join('&')
    )