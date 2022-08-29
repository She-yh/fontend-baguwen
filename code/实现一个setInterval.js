// function mySetInterval(func){
//     func();
//         setTimeout(()=>{mySetInterval(func)},1000);
// }


    var ssss=mySetInterval(()=>{console.log("sss")});

    function mySetInterval(func){
        var timer=null;
        function run() {
            func();
            timer=setTimeout(()=>{
                run();
                
            },1000);
        }
        run();
        return ()=>{
                console.log('clear')
                clearTimeout(timer);
            }
        
    }
    setTimeout(()=>{ssss()},3000)

