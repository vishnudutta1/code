function expo(m,n){
    if(n==0){
        return 1;
    }

    var ans = m * expo(n-1);
    return ans;

}

console.log(expo(2,3))