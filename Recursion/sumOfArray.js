function Factorial(n){
    var i = 0;
    if(i>n.length){
        return 1;
    }
    
  return (n[i] + Factorial(n[i-1]) )
  

   // ;
}


console.log(Factorial([1,2,3,4,5]))