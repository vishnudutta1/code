function runProgram(input) {
    input = input.trim().split("\n");
    //  let [n, k] = input[0].trim().split(" ").map(Number);
    //  let arr = input[1].trim().split(" ").map(Number);
    //  arr = arr.sort((a, b) => a-b);


 console.log(input)
   

}

if (process.env.USERNAME === "Gaurav") {
runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`);
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