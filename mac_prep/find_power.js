function findPower(p,n){
    if(p==0){
        return 1
    }
    
    return n*findPower(p-1,n)
}

console.log(findPower(4,2))