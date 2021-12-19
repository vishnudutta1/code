function waysBack(n){
    let empty = [];

    empty[0] = empty[1] = empty[2]=1;
    empty[3] = 2;

    for(let i = 4; i <=n;i++){
        empty[i] = empty[i-1] + empty[i-3] + empty[i-4];
    }

    return empty[n]
}

    
    
    function runProgram(input) {
    var n = +input;
   console.log(waysBack(n))
       
      }
      if (process.env.USERNAME === "Gaurav") {
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