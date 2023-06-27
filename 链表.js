/**
 * 链表具有的结构 一个元素由本身的节点和指向下一个节点的引用组成
 * 好处是 进行频繁的添加或者删除不需要移动其他元素
 */

class Node {
    current = null ;
    next = null ;
    constructor(current) {
        this.current = current ;
    }
}

/**
 * 3.设计链表主要实现以下四个方法：
getNodeByIndex: 根据下标查找对应的节点
append: 在链表的尾部增加一个新的节点
insert: 在某个位置插入一个节点
removeAt: 删除某个位置的节点
 */

class ArrayList {
    length =0 ;
    header = null ;
    getNodeByIndex(index) {
        if(typeof index !== 'number') {
            throw new Error(index+'is not number') ;
        }
        if(index <0 || index > this.length) {
            throw new Error(index + '不合法') ;
        }
        let current = this.header ;
        while(index--) {
            current = current.next ;
        }
        return current ;
    }
}

//。因此链表增删非首尾元素时不需要移动元素，只需要更改链接部分的值即可。
/**
 * 中间插入  只需要找到需要插入的位置的前驱节点
 * 然后把 当前节点的next = 前驱节点的next 前驱节点的next -> 当前节点的地址 
 * 
 * 中间删除 找到当前的前驱节点 把前驱节点next = current.next ,current = null ;
 */
const array = [
    {current:0,next:1},
    {current:1,next:2},
    {current:2,next:3},
    {current:3,next:null},
]


//如果我想删除index=2位置的元素 ;
function getNodeByIndex(index,arr) {
    let current =  arr[0].current;
    while(index--) {
        current = current.next ;
    }

    console.log(arr,current)
    return current ;
}

getNodeByIndex(1,array)

