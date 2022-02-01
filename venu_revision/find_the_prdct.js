var arr = [10,5,4,3,8]



var pro = 1

var newar = []

var sum = 0;

for(var i = 0;i <arr.length;i++){
    pro = pro * arr[i]
}

console.log(pro)

for(var i = 0;i <arr.length;i++){
   newar.push(pro/arr[i])
    
}


console.log(newar)