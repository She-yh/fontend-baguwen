class EventEmitter {
    constructor() {
      this.list = {}
    }
    //
    on(name, fn) {
      if (this.list[name]) {
        this.list[name].push(fn) 
      } else {
        this.list[name] = [fn] //如果直接赋值的话就不是一个数组了
      }
    }
    off(name, fn) {
      const tasks = this.list[name]
      if (tasks) {
        const index = tasks.findIndex((f) => f === fn || f.callback === fn)
        if (index >= 0) {
          tasks.splice(index, 1)
        }
      }
    }
    emit(name, once = false) {
      if (this.list[name]) {
        // 用slice的目的是创建副本，如果回调函数内继续注册相同事件，会造成死循环
        const tasks = this.list[name].slice();
        for (let fn of tasks) {
          fn();
        }
        if (once) {
          delete this.list[name] //delete是删除对象属性的
        }
      }
    }
  }
  // 测试
  const eventBus = new EventEmitter()
  const task1 = () => { console.log('task1'); }
  const task2 = () => { console.log('task2'); }
  const task3 = () => { console.log('task3'); }
  eventBus.on('task', task1)
  eventBus.on('task', task2)
  eventBus.off('task', task1)
  eventBus.on("task",task3)
  setTimeout(() => {
    eventBus.emit('task') // task2
  }, 1000)