function create(Con, ...args) {
    let obj = {}
    obj.__proto__=Con.prototype;
    let result = Con.apply(obj, args)
    return result instanceof Object ? result : obj
}

// 创建一个新的空的对象
// 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
// 执行构造函数中的代码（为这个新对象添加属性）
// 如果这个函数有返回值，则返回；否则，就会默认返回新对象


function Test(name, age) {
    this.name = name
    this.age = age
}
Test.prototype.sayName = function () {
    console.log(this.name)
}
const a = create(Test, 'yck', 26)
console.log(a.name) // 'yck'
console.log(a.age) // 26
a.sayName() // 'yck'