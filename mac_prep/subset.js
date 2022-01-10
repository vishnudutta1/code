var arr = [1,2,3,4,5];

for(var i = 0;i <arr.length;i++){
    var array = []

    for(var j = i;j<arr.length;j++){
        array.push(arr[j])
        console.log(array)
    }
}