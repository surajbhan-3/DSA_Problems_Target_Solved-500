// * write a program  to calculate the factorial using recursion



function factorial(n){

    if(n==0 || n==1){
        return 1;
    }

    return n*factorial(n-1)
}

let result = factorial(5)

console.log(result)


/*
  * ==> 5* factorial( n-1  == 4) the final result is  5 * 24 = 120
  * ==> 4* factorial(n-1 == 3)  now this will return 4*6 = 24
  * ==> 3* factorial(n-1 == 2)  now this will return 3*2 = 6  
  * ==> 2* factorial(n-1 == 1)  the function has 1 as value, it will return 2*1 = 2  
  * ==> 1 touchs the base condition returns 1 

*/