
// Write a program to print fibonacci series using recursion




function fibonacci(n){


    if (n<=1){
        return n;
    }
    return fibonacci(n-1)+ fibonacci(n-2)
}


let result = fibonacci(10)

console.log(result)

// * Time complexity:  o(2^n) this is because each call to fib(n) two additional recursive calls are made fib(n-1) fib(n-2)
// * Space Complexity: o(n) here the maximum depth of the call stack is proportional to the input value n 

