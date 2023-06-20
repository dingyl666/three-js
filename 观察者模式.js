

//发布者
class PubPublisher {
    constructor() {
        //创建订阅者
        this.observers = [] ;
    }

    //3 中行为  添加订阅 删除订阅 通知订阅
    
    add = (observer) => {
        this.observers.push(observer) ;
    }

    del = (item) => {
        this.observers.filter(ff => ff!==item)
    }
    notify = () => {
        this.observers.forEach(ff => {
            ff.update(this)
        })
    }
}

class Observer {
    //订阅者行为  被通知  去订阅
    constructor() {
        console.log("创建订阅者")
        this.flag = false ;
    }

    update = () => {
        console.log('订阅者更新')
        this.flag = true ;
    }
}