var alpha = "abcdefghijklmnopqrstuvwxyz"

var str = "abac"

var sum = 0

for(var i = 0;i<str.length;i++){
    for(var j = 0;j<alpha.length;j++){
        if(str[i]==alpha[j]){
            sum = sum + j+1
        }
    }
}

console.log(sum)