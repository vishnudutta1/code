// Given an array A of non-negative integers of size **m**.
// Your task is to sort the array in non-decreasing order 
//and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// You can only write your own sorting algorithm must
// not use builtin functionality of sort()


var arr = [4,5,3,7,1]

var sot = arr.sort((a,b)=>a-b)

//console.log(sort_arr)

var out = []

for(var i = 0;i <sot.length;i++){
    for(var j = 0;j <arr.length;j++){
        if(arr[i]==arr[j]){
            out.push(i)
        }
    }
}

console.log(out)