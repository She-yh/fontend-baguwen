function sleep(waittime){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,waittime);
    })
}

async function func(){
    for(let i = 0;i < 3;i++){
        await sleep(1000);
        console.log(i);
    }
}
func();
async function wo(){
    for(let i = 0;i < 3; i++){
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve();console.log(i);},1000);
        })
    }
}
wo();
//也可以用循环三次settimeout但是要注意时间是i*1000，不然会同时输出三次;