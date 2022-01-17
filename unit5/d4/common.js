var str1 = "rbbyrrby"

var str2 = "rbb"

var str3 = "rbbybbryb"



function subst(str1){

    
for(var i = 0;i <str1.length;i++){
    var out = ""
    for(var j = i;j<str1.length;j++){
        if(i==0){
            out = out+str1[j]
            console.log(out)
        }
    }
}

}

subst(str1)
subst(str2)
subst(str3)