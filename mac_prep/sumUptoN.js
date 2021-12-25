function Sum(n){
    if(n<=1){
        return 1
    }

    

   return (n+Sum(n-1))
}

console.log(Sum(5))

// function Factorial(n){
//     if(n<=1){
//         return 1;
//     }
//   console.log( (n + Factorial(n-1))) ;
  

//    // ;
// }


// Factorial(5)