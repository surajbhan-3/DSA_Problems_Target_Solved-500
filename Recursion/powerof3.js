// * Given an integer n, return true if it is a power of three. Otherwise, return false.

//*  An integer n is a power of three, if there exists an integer x such that n == 3x.



function powerByBrute(n){

    for(let i=0; i<=n; i++){
        if(3**i>n){
            return false;
        }
     else if(n==3**i){
            return true
        }
    }
    return false
}

let result = powerByBrute(28)

console.log(result)


function powerByRecursion(n){

    if(n==1){
        return true
    }
    if(n<=0 || n%3!==0){
        return false
    }


    return powerByRecursion(n/3)



}


let result1 = powerByBrute(27)

console.log(result1)
