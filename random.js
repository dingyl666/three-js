

const random = () => {
    return Math.round(Math.random()*10)
}

setInterval(() => {
    console.log(random())
},1000)