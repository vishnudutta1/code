
var arr = [1,2,1,3,4,4,5,2,3]

var obj = {}



for(var i = 0;i<arr.length;i++){
    if(!obj[arr[i]]){
        obj[arr[i]]= 1;
    }

    else{
        obj[arr[i]]++
    }
}

for(value in obj){
    if(obj[value]==1){
        console.log(value)
    }
}




