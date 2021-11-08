let count = 0;
function func(n, k, arr){

    if(k === 0){
        count++;
        return;
    }
    if(k < 0){
        return;
    }

    for(let i = 0; i < n; i++){

        func(n, k - arr[i], arr);
    }
}

function runProgram(input){ 
    input = input.trim().split('\n');
    // console.log(input);
    let [k,n] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    // console.log(k, n, arr);
    func(n, k, arr);
    console.log(count);
}

  if (process.env.USERNAME === "Gaurav") {
    runProgram(`3 3
    1 2 3`);
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