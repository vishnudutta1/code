// var arr = [2,7,12,17]

// var tar = 9;

// var count = 0

// var a = -1

// for(var i = 0;i <arr.length;i++){
//     for(var j = i+1;j<arr.length;j++){
//         if((arr[i]+arr[j])==tar){
//             console.log(i,j)
//             count++
//         }

//     }
// }

// if(count==0){
//     console.log(a,a)
// }


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var testCases = input[0];
    var line = 1;
    for (var i = 0; i < testCases; i++) {
      var [N, K] = input[line].trim().split(" ").map(Number);
      line++;
      var arr = input[line].trim().split(" ").map(Number);
      line++;
      // console.log(N, K, arr);
      twoSum(K, N, arr);
    }
    
   
  }

  function twoSum(K, N, arr) {
    // var arr = [2, 7, 11, 15];
    // var N = 4;
    // var K = 9;
    var left = 0;
    var right = N-1;
    // var l = "";
    // var s = "";
    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum == K) {
            console.log(left, right);
            // l += left;
            // s += right;
            // break;
            return;
        } else if (sum > K) {
            right--;
        } else {
            left++;
        }
    }
    console.log(-1 + " " + -1);
    // console.log(l + " " + s);
    }

  if (process.env.USERNAME === "hp") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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