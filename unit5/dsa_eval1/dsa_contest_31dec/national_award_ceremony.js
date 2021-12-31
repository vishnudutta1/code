
    
    
    function runProgram(input) {
        var line = input.trim().split("\n");
        var rc1 = line[0].trim().split(" ").map(Number);
     // var r1 = rc1[0];
     //console.log(line)
    
     
    
     for(var i = 2;i <=line.length;i= i+2){
        var arr = line[i].trim().split(" ").map(Number)
        console.log(arr.sort((a,b)=>a-b).join(" "))
     
     }
     
    
    //console.log(matr1)
    
      
    
    }
    
    if (process.env.USERNAME === "hp") {
      runProgram(`3
      1
      2
      3
      2 0 1
      4
      2 0 2 1`);
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