function AllTwiceOne(N,arr){

    var obj = {}

    for(var i = 0;i<arr.length;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]] = 1;
        }

        else {
            var before = obj[arr[i]]

            obj[arr[i]] = before + 1
        }
    }

    //console.log(obj)

    for(k in obj){
        if(obj[k]==1){
            console.log(k)
        }
    }

}





function runProgram(input) {
input = input.trim().split('\n');

var testcases = +input[0];

var line = 1;

for(var i = 0;i <testcases;i++){
    var N = +input[line++];

    var arr = input[line++].trim().split(" ").map(Number);

    //console.log(N,arr)

    AllTwiceOne(N,arr)
}



 


}

if (process.env.USERNAME === "Gaurav") {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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
