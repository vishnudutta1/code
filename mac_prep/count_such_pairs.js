// You are given an array A of N integers along with a
// target integer. Your task is to find out the number 
// of pairs of integers present in the array whose sum
//  is equal to the target value.

//  input                      output
//  5 9
// 3 0 6 2 7                   2

var tar = 3
var arr = [3,0,6,2,7]

var count = 0;

for(var i = 0; i<arr.length;i++){
    for(var j = i+1;j <arr.length;j++){
        if((arr[i]+arr[j])==tar){
            count++
        }
    }
}

console.log(count)