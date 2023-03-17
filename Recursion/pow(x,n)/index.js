

// ** leet code:-https://leetcode.com/problems/powx-n/


/* 
  TEST CASE
Input: x = 2.00000, n = 10
Output: 1024.00000 
*/


let x=2.00000;
let n=10;



 var mypow=function(x,n){


  
  return  pow(x,n)

  function pow(a,b){
        return (a**b)
  }

}


let result=mypow(x,n)
console.log(result)

   // Runtime -70s  memory 42mb



/*
var mypow=function(x,n){

    return (x**n)
  
  }
  
  
  let result=mypow(x,n)
  console.log(result)

  Runtime 61sec   memory  42.5mb
*/


/** 
 var myPow = function(x, n) {
    

  return Math.pow(x,n)


};

runtime 68 sec memory 42.2

 */
