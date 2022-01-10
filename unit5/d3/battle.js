function runProgram(input) {
    var input = input.trim().split("\n");
    var testcase = +input[0]
   // console.log(testcase)

   var arr = input[1].trim().split("").map(Number);
   

   var odsum = 0;
   var evesum =0;

   for(var i = 0;i <arr.length;i++){
       if(arr[i]%2==0){
           evesum = evesum + arr[i]
       }
       else{
           odsum = odsum+arr[i]
       }
   }

   if(odsum>evesum){
       console.log("Odd")
   }
   else{
    console.log("Even")
   }
  
  
  
  }
  
  if (process.env.USERNAME === "hp") {
  runProgram(`4
  1 2 7 4`);
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
  
  
