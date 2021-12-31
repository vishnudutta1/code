function powerSet(str,i,curr){
        if(i==str.length){
            console.log(curr)
            return;
        }

        powerSet(str,i+1,curr+str[i])

        powerSet(s,i+1,curr)
}