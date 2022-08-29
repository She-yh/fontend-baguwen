    function promiseAll(promises){
        var res=[],count=1;
        return new Promise((resolve,reject)=>{
            for(let i=0;i<promises.length;i++){
                promises[i].then(v=>{
                    count++;
                    res[i]=v;
                    if(count==promises.length){
                        resolve(res);
                    }
                },r=>{
                    reject(r);
                })
            }
        })
    }

    function promiseRace(promises){
        return new Promise((resolve,reject)=>{
            for(let i=0;i<promises.length;i++){
                promises[i].then(v=>{
                    resolve(v);
                },r=>{
                    reject(r);
                })
            }
        })
    }
    let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("OK1");},1000);
    })
    let p2=new Promise((resolve,reject)=>{
        resolve("OK2");
    })
    let p3=new Promise((resolve,reject)=>{
        resolve("OK3");
    })

    console.log(promiseAll([p1,p2,p3]));
    console.log(promiseRace([p1,p2,p3]));