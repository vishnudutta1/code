function number_of_ways(m,n){
    if(n==1 || m==1){
        return 1
    }

    console.log(number_of_ways(n-1,m)+number_of_ways(n,m-1))
}

number_of_ways(3,4)