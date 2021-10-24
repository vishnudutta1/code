// Brute force

// var arr = [1,3,2,4,1,16]

// var newar = []

// for(var i = 0;i <arr.length;i++){
//     for(var j = i+1;j<arr.length;j++){
//         if(arr[j]>=arr[i]){
//             newar.push(arr[j]);
//             break;
//         }
//     }

//      if (i==arr.length-1){
//         newar.push(-1)
//     }
// }
       


// console.log(newar)


// stack Method


var arr = [1,3,2,4]

var stack = []

var out = [];

var i = arr.length-1;

var top = -1

if(stack.length==0){
    out.push(-1)
}

stack.push(arr[i]);

i--

if(arr[i]<=stack[top])









