function PrintHello(n){
    if(n==0){
        return
    }
    console.log("hello");
    PrintHello(n-1)
}

PrintHello(5)