var solve = (url)=>{
    let arr = url.split("?")[1];
    let para = arr.split(".");
    let ans = {};
    for(let i = 0;i < para.length;i++){
        key = para[i].split("=")[0];
        value = para[i].split("=")[1]?para[i].split("=")[1]:true;
        ans[key] = value;

    }
    console.log(ans);
}
solve('https://cloud.tencent.com?a=1&b=2&c=3/')
//%20%10
//parseUrl('https://cloud.tencent.com?a=1&b=2&c=3/#');
// 返回 {a: 1, b: 2, c: 3}

// 给定一个数组，数组里的每个元素形如 `{ id: 1, parent: 0 }`, parent 字段表示其父元素的 id (id 为 0 是根结点)，根据该数组可构造出一棵树。
// 请完成一个函数，输入为该数组，返回其构造出来的树的最大深度(根节点到叶子结点的最大距离)。

const list = [
    { id: 5, parent: 4 },
    { id: 2, parent: 0 },
    { id: 3, parent: 1 },
    { id: 1, parent: 0 },
    { id: 4, parent: 1 },
    { id: 0, parent: -1 },
];

function Node(val){
    this.son = [];
    this.val = val;
}
var root = new Node(0);
var ans = 0;
var createTree = (parentVal,parentNode,depth) => {//用层序遍历构造树
    let rem = [];
    if(depth>ans) ans= depth;
    for(let i = 0;i<list.length;i++){
        if(list[i].parent==parentVal){//寻找父节点
            rem.push(i);
        }
    }
    for(let i = 0;i<rem.length;i++){
        parentNode.son.push(new Node(list[rem[i]].id));
        createTree(list[rem[i]].id,parentNode.son[i],depth+1);
    }
}
createTree(0 , root , 1);
console.log(ans);


