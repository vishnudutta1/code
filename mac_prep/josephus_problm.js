function josephus(n,k){
    if(n==1){
        return 1
    }

    return josephus(((n-1,k)+k)%n)
}

console.log(josephus(5,3))