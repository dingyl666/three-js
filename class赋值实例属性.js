

class Modal {
    key = 0 ;
    constructor(key){
        this.key = key ;
    }
}
class aa {
    id = 0 ;
    constructor(id){
        this.id = id ;
    }
    list = [new Modal(1),new Modal(2),new Modal(3)] ;
    delList = (key) => {
        this.list = this.list.filter(ff => ff.key!==key) ;
    }

    delList2 = (key) => {
        const findIndex = this.list.findIndex(ff => ff.key===key) ;

        this.list.splice(findIndex,1)
    }
}

const obj = new aa() ;


const list = [
    new aa(1),
    new aa(2),
    new aa(3),
]

const find = list.find(dd => dd.id === 1) ;
if(find) {
    console.log(find,'111')
    find.delList(1) ;
    console.log(find,'222')
}