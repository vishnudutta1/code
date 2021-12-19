// //Enter code here
// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the count of 0's ,1's and 2's

// For example, consider the array asarr = [0 1 0 2 1 2 0 1 2 0], and the value stored in n = 10

// Then, the required output will be4 3 3, as no. of 0's are 4, no. of 1's are 3, and no. of 2's are 3.


// Input                               OUTPUT
// 0 1 0 1 1 1 0 2 2 0                 4 4 2

function runProgram(input) {
    input = input.trim().split("\n");
   // console.log(input)

   var arr = input[1].trim().split(" ").map(Number)
  // console.log(arr)

    var c0 = 0
    var c1 = 0;
    var c2 = 0;

    for(var i = 0;i <arr.length;i++){
        if(arr[i]==0){
            c0++
        }
        else if(arr[i]==1){
            c1++
        }
        else if(arr[i]==2){
            c2++
        }
    }

    console.log(c0,c1,c2)
    

    // console.log(t,arra)

    // var c1 = 0;

    // var c2 = 0;

    // var c3 = 0;

    // for (var i = 0;i <t;i++){
    //   if(arra[i]==0){
    //     c1++
    //   }

    //   else if(arra[i]==1){
    //     c2++
    //   }

    //   else if(arra[i]==2){
    //     c3++
    //   }
    // }
    
    // console.log(c1,c2,c3)

  
    




}
  if (process.env.USERNAME === "Gaurav") {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0 `);
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