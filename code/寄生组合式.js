function extend(son,father){
	var prototype = object(father.prototype);//创建对象
	prototype.constructor = son;//增强对象
	son.prototype = prototype;//指定对象
}

function Parent(name) {
	this.name = name
}
Parent.prototype.eat = function () {
  console.log(this.name + ' is eating')
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.contructor = Child

// 测试
let xm = new Child('xiaoming', 12) 
console.log(xm.name) // xiaoming
console.log(xm.age) // 12
xm.eat() // xiaoming is eating