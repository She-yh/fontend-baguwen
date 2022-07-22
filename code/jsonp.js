
function JSONP(src){
    var script = document.createElement('script');
    script.type = 'text/javascript';   
    // 传参并指定回调执行函数为onBack
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=onBack';    
    document.head.appendChild(script);    
    // 回调执行函数
    function onBack(res) {
      alert(JSON.stringify(res));
    }
}