function Print_uptoN(n){
    if(n==0){
        return
    }

    console.log(n)

    Print_uptoN(n-1)

}

Print_uptoN(5)