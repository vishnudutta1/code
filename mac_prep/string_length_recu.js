function runProgram(input) {
    var str = input.trim();
    // console.log(str);
  
    function strlen(str, cnt){
      cnt=cnt || 0;
      if(str.length){
        return strlen(str.substr(1), ++cnt);
      }else{
        return cnt;
      }
    }
    
    console.log(strlen(str));
  
  
  
  
  
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`masaischool`);
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