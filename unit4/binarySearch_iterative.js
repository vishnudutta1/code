function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a-b);
    if(Search_binary(n, k, arr, 0, n-1)){
        console.log("1");
    }
    else{
        console.log("-1");
    }
}

function Search_binary(n, k, arr, low, high){
    while(low <= high){
        let mid = Math.floor(low + ((high - low)/2));
        if(arr[mid] == k){
            return true;
        }
        else if(arr[mid] > k){
            high = mid - 1;
        }
        else if(arr[mid] < k){
            low = mid + 1;
        }
    }
    return false;
}

if (process.env.USERNAME === "Gaurav") {
runProgram(`5 0
2 -2 3 4 1`);
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