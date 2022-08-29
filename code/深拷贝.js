function deepClone(obj, hash = new WeakMap()) {

    if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== "object") return obj;

    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj); //解决循环引用
    let cloneObj = Array.isArray(obj) ? [] : {}

    hash.set(obj, cloneObj);//set的过程也是存的地址，改变newObj，hash里的值也会变
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}

let obj = { name: 1, address: { x: 100 } };
obj.o = obj; // 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);