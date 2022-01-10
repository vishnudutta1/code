
function diff(data,arr){
    var count =0; 
    for(var i = arr.length-1;i >=0;i--){
        for(var j = 0;j<arr.length;j++){
            if((arr[i]-arr[j])==data){
                    count++
            }
        }
    }

    if(count>0){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}

function runProgram(input) {

    var lines = input.trim().split("\n")
    var cases= +lines[0];
    var line=1;
    for(var i=0; i <cases; i++){
        var data= lines[line++].trim().split(" ").map(Number);
        var n= data[0];
        var k= data[1];
        var arr= lines[line++].trim().split(" ").map(Number);
        diff(data[1], arr);

       
        
    }



  







}

if (process.env.USERNAME === "hp") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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




function diff(data,arr){
    var count =0; 
    for(var i = arr.length-1;i >=0;i--){
        for(var j = 0;j<arr.length;j++){
            if((arr[i]-arr[j])==data){
                    count++
            }
        }
    }

    if(count>0){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}