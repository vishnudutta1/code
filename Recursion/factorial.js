// function Factorial(n){
//     if(n<=1){
//         return 1;
//     }
//   return (n * Factorial(n-1)) ;
  

//    // ;
// }


// console.log(Factorial(5))


// oj----->>


function factorial(n){
    if (n == 0 || n == 1){
        return 1
    }

    return n * factorial(n-1)
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var n = +input;
    console.log(factorial(n))
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }