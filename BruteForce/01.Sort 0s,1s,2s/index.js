

// * Porblem-link="https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1"




var arr=[0,1,2,1,2,1,0]
var N=7;
 function sort012(arr, N)
{
    //your code here
    let count0=0;
    let count1=0;
    let count2=0;
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]==0){
            count0++
        }else if(arr[i]==1){
            count1++;
        }
        else if(arr[i]==2){
            count2++
        }
    }

    let index=0;
      while(count0>0){
          arr[index]=0
          index++;
          count0--
      }
      while(count1>0){
          arr[index]=1
          index++;
          count1--
      }
      while(count2>0){
          arr[index]=2
          index++;
          count2--
      }
      
      return arr
}


let result= sort012(arr,N)
console.log(result)
