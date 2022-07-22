function flat(arr){
    return arr.reduce((prev,cur)=>{
        return prev.concat(Array.isArray(cur)?flat(cur):cur);
    },[])
}
const arr=[1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5];
console.log(arr);
console.log(flat(arr));
