const obj = {
    name: '1111',
    innerObj: {
        innerName: '2222',
    },
    innerArr: [1,2,3],
}
//重写数组方法
const orginalProto = Array.prototype;
const arrayProto = Object.create(orginalProto); // 先克隆一份Array的原型出来
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methodsToPatch.forEach(method => {
  arrayProto[method] = function () {
    // 执行原始操作
    orginalProto[method].apply(this, arguments)
    console.log('监听赋值成功', method)
  }
})

const observer= (obj) => {
    if (typeof obj !== 'object' || obj == null) {
      return
    }
    if (Array.isArray(obj)) {
        // 如果是数组, 重写原型
        obj.__proto__ = arrayProto
        // 传入的数据可能是多维度的,也需要执行响应式
        for (let i = 0; i < obj.length; i++) {
          observer(obj[i])
    
        }
      } else {
        for (const key in obj) {
          // 给对象中的每一个方法都设置响应式
          setProperty(obj, key, obj[key])
    
        }
      }
}

const setProperty = (obj,key,val) => {
    observer(val);
        Object.defineProperty(obj,key,{
            enumerable: true,
            configurable: true,
            get(){
                console.log('get',val);
                return val;
            },
            set(newVal){
                this.val = newVal;
                console.log('set');
            }
        })
}
observer(obj)
// obj.name = '2222';
// obj.innerObj.innerName = 'fuck';
obj.innerArr[1] =10;