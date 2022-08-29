//可里化 要再写
const curry = (fn) => {
    return judge = (...args) => {
        return args === fn.length?fn.apply(this,args):(_arg) => judge(..._arg,args);
    }
}
//实现new 要再写
const myNew = (obj,...args) => {
    let newObj = {};
    newObj.__proto__ = obj.prototype;
    let result = obj.apply(this,args);
    typeof result === 'object'?result:newObj
}

//防抖
const debounce = (func,timeout) => {
    let flag = null;
    return () => {
        let _args = arguments;
        let _this = this;
        if(flag) clearTimeout(flag);
        flag = setTimeout(()=>{
            flag = null;
            func.apply(_this,_args);
        },timeout)

    }
}
//节流 要再写
const throttle = (func,timeout) => {
    let flag = null,last = null;
    return () => {
        let _args = arguments;
        let _this = this;
        let now = +new Date();
        if(last&&last+timeout>now){ //冷却还没结束
            clearTimeout(flag);
            flag = setTimeout(()=>{
                last =now;
                func.apply(_this,_args);
            },timeout)
        }else{ //第一次直接触发 或者 冷却结束了触发
            last = now;
            func.apply(_this,_args);
        }
    }
}
//深拷贝 还要写
const deepClone = (obj,wMap = new WeakMap()) => {
    if(typeof obj !== 'object') return obj;
    if(obj === null) return obj; //对象类型的引用指向0。null的值始终指向NULL指针，它在大部分平台都是用0x00来表示
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    
    //解决循环引用
    if(wMap.has(obj)) return wMap.get(obj);
    let newObj = Array.isArray(obj)?[]:{};
    wMap.set(obj,newObj);

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'object'?deepClone(obj[key]):obj[key];
        }
    }
    return newObj;
}

//数组拍平reduce
const arr=[1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5];
console.log(arr);
function flat(arr){
    return arr.reduce((prev,cur) => {
        return prev.concat(Array.isArray(cur)?flat(cur):cur);
    },[])
}
console.log(flat(arr));

//