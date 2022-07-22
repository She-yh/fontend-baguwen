var o={
    "A": {
        "a1": 1,
        "a2": 2
    },
    "B": {
        "b": 3,
        "c":[1,2,3,4]
    }
}
function plat(o,prekey,resobj){
    prekey=prekey?prekey+'.':'';
    for(let key in o){
        var v=o[key];
        if((Object.prototype.toString.call(o[key]).slice(8,-1)==="Object")){
            plat(v,prekey+key,resobj);
        }else{
            resobj[prekey+key]=v;
        }
    }
}
function flat(obj) {
    for(let key in obj){
        if(Object.prototype.toString.call(obj[key]).slice(8,-1)==="Object"){
            flat(obj[key]);
        }else{
            result[key]=obj[key];
        }
    }
}
var result={};
plat(o,'',result);
// flat(o);
console.log(result);
    