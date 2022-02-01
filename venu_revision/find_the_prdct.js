var arr = [10,5,4,3,8]

var pro = 1

var newar = []

for(var i = 0;i <arr.length;i++){
    pro = pro * arr[i]
}


for(var i = 0;i <arr.length;i++){
    newar.push(pro/arr[i])
}


console.log(newar)