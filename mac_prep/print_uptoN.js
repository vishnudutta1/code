function Print_uptoN(n){
    if(n==0){
        return
    }

    

    Print_uptoN(n-1)
    console.log(n)
}

Print_uptoN(5)