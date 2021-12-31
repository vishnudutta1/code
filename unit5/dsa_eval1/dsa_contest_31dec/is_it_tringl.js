// var arr = [4,5,13]
function Is_it_Triangle(arr){
var a = arr[0];
var b = arr[1];
var c = arr[2];

var sum1 = a+b;
var sum2 = a+c;
var sum3 = b+c;

if(sum1>c && sum2>b && sum3 >a){
    console.log("Yes")
}

else{
    console.log("No")
}


}


function runProgram(input) {
    var line = input.trim().split("\n");
    var rc1 = line[0].trim().split(" ").map(Number);
  var r1 = rc1[0];
 // console.log(line,rc1)

 

 for(var i = 1;i <line.length;i++){
    var arr = line[i].trim().split(" ").map(Number)

    Is_it_Triangle(arr)
 }
 

//console.log(matr1)

  

}

if (process.env.USERNAME === "hp") {
  runProgram(`4
  4 5 13
  7 1 8
  2 5 4
  2 2 2
  `);
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