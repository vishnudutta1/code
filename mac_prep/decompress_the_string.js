// var str = "a3b2";

// // out = aaabb

// var out = ""

// for(var i = 1;i <str.length;i=i+2){
//     var st = +str[i]
//     for(var j = 1;j<=st;j++){
//         out = out + str[i-1]
//     }
    
// }

// console.log(out)


function runProgram(input) {
    var input = input.trim().split("\n");
console.log(input)
  
  
  }
  
  if (process.env.USERNAME === "Gaurav") {
  runProgram(`a3b2`);
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
  
  
  
  