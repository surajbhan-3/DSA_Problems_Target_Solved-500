// * Write a function to print sum of digits



function sum(n){

     if(n==0){
        return 0
     }
     if(n==1){
        return 1
     }

     return sum(n-1)+n
}

let result = sum(5)
console.log(result)
