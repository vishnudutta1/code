// find unique no



var arr1 = [5,7,8,9,15]

var arr2 = [7,3,9,,2,8]

// output = 5,15,3,2

var arr3 =[]



for(var i = 0;i <arr1.length;i++){
    var c1 = 0
    for(var j = 0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            c1++
        }
    }

    if(c1==0){
        arr3.push(arr1[i])
    }
}

for(var i = 0;i <arr2.length;i++){
    var c1 = 0
    for(var j = 0;j<arr1.length;j++){
        if(arr2[i]==arr1[j]){
            c1++
        }
    }

    if(c1==0){
        arr3.push(arr2[i])
    }
}

console.log(arr3.join(" "))