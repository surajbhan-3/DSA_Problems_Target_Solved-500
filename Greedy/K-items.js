
// Leet code problem
//  https://leetcode.com/problems/k-items-with-the-maximum-sum/description/     



var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    

    let arr=[]

     for(let i=0; i<=numOnes-1; i++){
          arr.push(1)
     }
       for(let i=0; i<=numZeros-1; i++){
          arr.push(0)
     }

       for(let i=0; i<=numNegOnes-1; i++){
          arr.push(-1)
     }
  let sum=0;
     for(let i=0;i<=arr.length-1; i++){

            if(i>k-1){
                break;
            }
            else{
                sum+=arr[i]
            }
     }

     return sum;
};


kItemsWithMaximumSum(3,2,1,2)

console.log(kItemsWithMaximumSum(3,2,1,2))

// high Runtime 99 ms


// second approach


/*

var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    

  if(k<=numOnes){

      return k;
  }else if(k>numOnes&& k<=numZeros+numOnes){
      return numOnes
  }
  else if(k>numOnes+numZeros){
      let res=numOnes
    let i=numOnes+numZeros+1
      while(i<=k){
         res+=-1;
         i++;
      }
      return res
  }

};


*/

  //   high runtime   87 ms



  // Third approach


  /*
  
  var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    

let i=1;
let res=0;
while(i<=k){
    if(i<=numOnes){
      res+=1
    }else if(i>numOnes&&i<=numOnes+numZeros){

      res+=0
    }else if(i>numOnes+numZeros && i<=k){
          res+=-1
    }
    i++    
}
return res

};
  
  
  */

// Runtime 74 ms 


// fourth

/*


var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    

 if(k<=numOnes){
     return k
 }
 else if(k>numOnes&&k<=numZeros+numOnes){
     return numOnes
 }
 
 else if(k>numOnes+numZeros){
     let sum=  numOnes+numZeros
      
     return numOnes + ((k-sum)*-1)
     
     //return numOnes + (res)
 }

};

*/ 
// runtime 72 ms





