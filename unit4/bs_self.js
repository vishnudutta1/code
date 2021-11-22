function runProgram(input) {
    input = input.trim().split("\n");
  // console.log(input);
  let [n, k] = input[0].trim().split(" ").map(Number);
//console.log(n,k);
     let arr = input[1].trim().split(" ").map(Number);
    // console.log(n,k,arr)
    arr = arr.sort((a, b) => a-b);
    var i = 2
while (i<input.length){
   
    var arr2 = input[i].trim().split(" ").map(Number);
    i++
    console.log(n,k,arr,arr2)
}

function ToFindNumber(arr,arr2){
    var k = arr2[0];
    for(var i =0;i<arr.length;i++){
        if(arr[i]==k){
            return "YES";
        }
    }
}
    
//     if(Search_binary(n, k, arr, 0, n-1)){
//         console.log("1");
//     }
//     else{
//         console.log("-1");
//     }
// }

// function Search_binary(n, k, arr, low, high){
//     while(low <= high){
//         let mid = Math.floor(low + ((high - low)/2));
//         if(arr[mid] == k){
//             return true;
//         }
//         else if(arr[mid] > k){
//             high = mid - 1;
//         }
//         else if(arr[mid] < k){
//             low = mid + 1;
//         }
//     }
//     return false;
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