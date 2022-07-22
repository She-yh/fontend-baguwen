 var sortArray = function(nums) {
    function quickSort(left,right,nums){
        let tmple=left,tmpri=right;
        let tmp=nums[left];
        if(left>=right) return;
        while(left<right){
            while(nums[right]>=tmp&&left<right)right--;
            while(nums[left]<=tmp&&left<right)left++;
            // console.log(left,right);
            if(nums[left]>nums[right]){
                let s=nums[left];
                nums[left]=nums[right];
                nums[right]=s;
            }
        }
        [nums[tmple],nums[left]]=[nums[left],nums[tmple]];
        // console.log(nums);
        quickSort(tmple,left-1,nums);
        quickSort(left+1,tmpri,nums);
    }
    quickSort(0,nums.length-1,nums);
    return nums;
};

console.log(sortArray([1,3,10,92,3,4,5,90,2,7,8]))