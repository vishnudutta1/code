// function fibonacci(n){
//     if(n==0||n==1){
//         return n;
//     }

//     return (fibonacci(n-1)+fibonacci(n-2))

// }

// console.log(fibonacci(5))



// --->>> Oj


function fibonacci(n){
    if (n == 0 || n == 1){
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2)
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    var n = +input;
    console.log(fibonacci(n))
   
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
