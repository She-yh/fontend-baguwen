Function.prototype.myBind=function(ctx,...args){
    var _this=this;
    var ctx = ctx||window;
    var args=[...args];
    return function(...newArg){
        _this.apply(ctx,[...args,...newArg]);
    }
}
Function.prototype._call = function(ctx, ...args) {
    // 判断上下文类型 如果是undefined或者 null 指向window
    // 否则使用 Object() 将上下文包装成对象
    ctx = ctx||window;
    //不能确定我们写的属性名就不存在在原型链上。保险起见用Symbol()独一无二
    const key = Symbol()
    ctx[key] = this
    // 立即执行一次
    const result = ctx[key](...args)
    // 删除这个属性
    delete ctx[key]
    // 把函数的返回值赋值给_call的返回值
    return result
}
var s={
    a:"s"
}
a="window";
function test(){
    // console.log(this);
    console.log(this.a);
}
test._call(s);