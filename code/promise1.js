//构造函数
function Promise(executor){
    this.promiseState='pending';
    this.promiseResult=null;
    this.callbacks=[];//保存函数
    const self=this;    //也可以用const resolve=data=>{来解决this的指向问题
    function resolve(data){
        //console.log(this);//this是指向window的
        //console.log(self);
        //修改promiseState 状态值
        if(self.promiseState!=='pending') return;
        self.promiseState='fulfilled';
        //修改promiseResult 结果值
        self.promiseResult=data;
        self.callbacks.forEach(item=>{item.onResolved(data);});
        
    }
    const reject=data=>{
        //console.log(this);//这里用了箭头函数this是指向对象的
        if(self.promiseState!=='pending') return;//确保状态只能修改一次
        this.promiseResult=data;
        this.promiseState='rejected';
        this.callbacks.forEach(item=>{item.onRejected(data);});
    }
    //用try catch实现throw
    try{
        //同步调用  也许会异步执行呢
        executor(resolve,reject);
    }catch(e){
        //如果用了throw要修改状态为reject
        reject(e);
    }
}
//实现then
Promise.prototype.then=function(onResolved,onRejected){
    return new Promise((resolve,reject)=>{
        if(this.promiseState==="fulfilled"){//为什么这里用this可以呢？
            try {
                let result = onResolved(this.promiseResult);
                //实现返回一个对象
                if(result instanceof Promise){//如果是Promise对象就返回一样的状态
                    result.then(value=>{
                        resolve(value);
                    },reason=>{
                        reject(reason);
                    })
                }else{  //如果不是Promise对象就放回成功
                    resolve(result);
                }        
            } catch (error) {
                 reject(e);   
            }
        }
        if(this.promiseState==='rejected'){
            onRejected(this.promiseResult);
        }
        //判断pending状态  实现异步
        if(this.promiseState==="pending"){
            //保存回调函数，让resolve和reject可以调用
            this.callbacks.push({
                onResolved,
                onRejected
            });
        }
    })
}