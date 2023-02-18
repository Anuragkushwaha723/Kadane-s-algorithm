var arr=[1,2,3,-2,5];
var currSum=0,maxSum=arr[0];
for (let i = 0; i < arr.length; i++) {
    currSum=currSum +arr[i];
    if(maxSum<currSum){
        maxSum=currSum;
    }
    if(currSum<0){
        currSum=0;
    }
}
console.log(maxSum);