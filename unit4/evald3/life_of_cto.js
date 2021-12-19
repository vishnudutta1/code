function runProgram(input) {
    var lines = input.trim().split("\n");
    var length= +lines[0];
    
    var array = lines[1].trim().split(" ").map(Number);

   // console.log(array,length)

   var condit = false;

   for(var i = 0 ;i <length;i++){

    if(array[i]==1){
        console.log(i);
        condit = true;
        break;
    }
   }

   if(condit == false){
       console.log(-1)
   }

        
        
    }
    
    if (process.env.USERNAME === "Gaurav") {
        runProgram(`5
        0 0 0 0 0`);
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
