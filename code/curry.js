function add(a,b,c){
    return a+b+c;
}
var curry=(func)=>{
    return judge=(...args)=>{
        if(args.length===func.length) return func(...args);
        else return (...arg)=>judge(...args,...arg);
    }
}

function adding(){
    let args = [...arguments]
    return function temp(...arg){
        if(arg.length){
            args = [
                ...args,
                ...arg
            ]
            return temp
        }else{
            return args.reduce((a,b)=> a + b, 0);
        }
    }
}

console.log(adding(1)(2)(3)(4, 6)())  //15
console.log(adding(1)(2)(3, 4, 6)()) 
