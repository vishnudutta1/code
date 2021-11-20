function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let array = input[1].trim().split(" ").map(Number);
    array = array.sort((a, b) => a-b);
    if(Search_binary(n, k, array, 0, n-1)){
        console.log("1");
    }
    else{
        console.log("-1");
    }
}

function Search_binary(n, k, array, lo, hi){

    if(lo > hi){
        return;
    }

    let mid = Math.floor(lo + ((hi - lo)/2));
    if(array[mid] == k){
        return true;
    }
    else if(array[mid] > k){
        return binary_search(n, k, array, lo, mid - 1);
    }
    else if(array[mid] < k){
        return binary_search(n, k, array,  mid + 1, hi);
    }
}

if (process.env.USERNAME === "Gaurav") {
runProgram(`5 0
2 -2 3 4`);
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