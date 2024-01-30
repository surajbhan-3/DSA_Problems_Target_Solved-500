// * Write a function to calculate the raising power of a number 



function power(base, n){

     if(n==0){
        return 1
     }

     return base*power(base, n-1)
}


let result = power(2,2)


console.log(result)