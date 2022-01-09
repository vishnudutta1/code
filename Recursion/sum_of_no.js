function sum(n){
    if(n==0){
        return
    }

    var k = 0;
    
    k = n%10
    var sumi = 0
    sumi = sumi + k
    var j = Math.floor(n/10)
    return sumi

   sum(j)
    

}

console.log(sum(2048))