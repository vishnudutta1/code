r

 z67890
function runProgram(input) {
    var st=input.trim();
    // console.log(str[1]);
    
    var data={}
    for(var i=0; i < st.length; i++){
        if(data[st[i]] == undefined){
            data[st[i]]=1;
        }else{
            data[st[i]]++;
        }
    }

    var value= Object.values(data);
    for(var j=0; j <value.length; j++){
        if(value[j] >1){
            console.log("No");
            return;
        }
        
    }
    console.log("Unique");

}

if (process.env.USERNAME === "Gaurav") {
    runProgram(`masai`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}