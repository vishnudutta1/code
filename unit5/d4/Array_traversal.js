








function runProgram(input) {
    var line = input.trim().split("\n");
    var rc1 = line[0].trim().split(" ").map(Number);
    var arr = line[1].trim().split(" ").map(Number);
 

 
    var c1 = 0;

    var d1 = 5;
    
    var c2 = 0;
    
    var d2 = 3;
    
    var c3 = 0;
    
    var d3 = 2;
    
    var c4 = 0;
    
    for(var i = 0;i <arr.length;i++){
        if(arr[i]%d1 ==0){
            c1++
        }
    
        if(arr[i]%d1!==0 && arr[i]%d2==0){
            c2++
        }
    
        if(arr[i]%d1!==0 && arr[i]%d2!==0 && arr[i]%d3==0){
            c3++
        }
    
        if(arr[i]%d1 != 0 && arr[i]%d2!==0 && arr[i]%d3!==0)
        {
            c4++
        }
    }
    
    console.log(c1,c2,c3,c4)
 
 
 }
 
 if (process.env.USERNAME === "hp") {
  runProgram(`4
  1 2 3 4`);
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