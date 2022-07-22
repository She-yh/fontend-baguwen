var nums=[5,3,2,1,5,4,2,3,5,2,9,10];

var ans=nums.reduce((prev,cur)=>{
    if(prev.indexOf(cur)===-1){
        prev.push(cur);
    }
    return prev;
},[]);

console.log(ans);
