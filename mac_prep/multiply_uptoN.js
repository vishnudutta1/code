function multiply(n){
    if(n<=1){
        return 1
    }

    return n*multiply(n-1)

}

console.log(multiply(5))
