function runProgram(input) {


    input = input.trim().split("\n");


       var n = +input[0]


       var arr = input[1].trim().split(" ").map(Number)


        var maxim = 0;


        for (var i = 0; i < n; i++){


         if (maxim < arr[i]){


           maxim = arr[i]


      }
    }
      console.log(maxim)


  }
  
  if (process.env.USERNAME === "hp") {
    runProgram(`5
  6 7 8 1 4`);
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
      process.exit(0);
    });
  }