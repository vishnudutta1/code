function robb_houses(arra, num)
{
    if (num== 0)
        return 0;

    let res_1 = arra[0];
    if (num == 1) 
        return res_1;

    let res_2 = Math.max(arra[0], arra[1]);
    if (num == 2) 
        return res_2;
  
    
    let max = 0;
    for (let i = 2; i < num; i++){
        max = Math.max(arra[i] + res_1,res_2);
        res_1 = res_2; 
        res_2 = max;
    }
    return max;
}
function runProgram(input) {
    input = input.trim().split('\n'); 
    var testcases = +input[0];
    var line = 1;
    for (let i = 1;i<=testcases;i++) {
        var num = +input[line++];
        var arra = input[line++].trim().split(" ").map(Number);
      
        console.log(robb_houses(arra, num));
        }       
  }
  if (process.env.USERNAME === "vishnu") {
    runProgram(`3
    2
    1 100
    3
    2 100 99
    4
    100 1 1 100`);
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