var deepcopy=function(obj){
    if(typeof obj!== 'object') return; //很重要
    let newobj=Array.isArray(obj) ? []:{};
    for(let key in obj){
        
        if(obj.hasOwnProperty(key)){
            newobj[key]= typeof obj[key]==='object' ? deepcopy(obj[key]) : obj[key];
        }
    }
    return newobj
}

Array.prototype.name="jjr"
var a=[1,3,4,[5,6,7],{name:"syh"}];
var b=deepcopy(a);
b[0]=10;
b[3][0]=100;
b[4].name='jjr';
console.log(a);
console.log(b);
