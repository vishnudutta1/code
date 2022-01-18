var arr = [1,1,1,2,2,2]

var tar = 1;

var first = 0;

var last = 0;

var c = 0;

for(var i = 0;i<arr.length;i++){
    if(arr[i]==tar){
       // console.log(i)
        first = i

        break;
    }
}

for(var i = 0;i<arr.length;i++){
    if(arr[i]==tar){
        c++
       last = i
    }
}

console.log(first,last,c)
