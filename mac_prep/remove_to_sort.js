var arr = [1,2,4,3,5,7,8,6,9,10]

var new_arr = []

for(var i = 0;i <arr.length;i++){
    if(arr[i]==0){
        new_arr.push(arr[i])
    }

    else if(arr[i]<arr[i+1]){
        new_arr.push(arr[i])
    }

    
}

console.log(new_arr)

