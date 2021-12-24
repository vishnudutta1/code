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