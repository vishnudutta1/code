




function runProgram(input) {
    var input = input.trim().split("\n");

    var arr = input[1].trim().split(" ").map(Number);
  

    
var newar = []

for(var i = 0;i <arr.length;i++){
    if(arr[i]>=0){
        newar.push(arr[i])
    }
    else{
        newar.push(0)
    }
}

console.log(newar.join(""))


  
  
  }
  
  if (process.env.USERNAME === "hp") {
  runProgram(`5
  2 -4 6 8 -9`);
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
  
  