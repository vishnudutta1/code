// function runProgram(input) {
//     var input = input.trim().split("\n");
//     var testcase = +input[0]
//    // console.log(testcase)
//     var line = 1 
//     for(var i = 0;i<testcase;i++){
//         var size = input[line].trim().split(" ").map(Number);
//         line++
//         var arr = input[line].trim().split(" ").map(Number)
//         line++
//         var count = 0
// if(size<3){
//     console.log("-1")
// }

// else {
//     for(var i = 1;i<arr.length-1;i++){
//         if(arr[i]>arr[i-1] && arr[i]>arr[i+1] ){
//             count++
//         }
//     }

//     console.log(count)
// }
//     }
  
  
  
//   }
  
//   if (process.env.USERNAME === "hp") {
//   runProgram(`2
//   2
//   1 2
//   10
//   884 729 768 201 266 494 597 328 705 287`);
//   } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
//   }
  





function runProgram(input) {
    var lines = input.trim().split("\n");

    var cases= +lines[0];


    var line=1;


     for(var i=0; i <cases; i++){

        var lenth=  +lines[line++];

      var arr= lines[line++].trim().split(" ").map(Number);
    //   console.log(length, arr);

         if(lenth <3){
            console.log(-1);
       }else{

        var cnt=0;

        for(var j=1; j < lenth-1; j++){


            if( arr[j] > arr[j-1] && arr[j] > arr[j+1]){


                cnt++;

            }
        }


        console.log(cnt);
    }


  }


  
}
if (process.env.USERNAME === "hp") {
  runProgram(`2
  2
  1 2
  10
  884 729 768 201 266 494 597 328 705 287`);
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