
// var arr = [1,2,1,3,4,4,5,2,3]

// var obj = {}



// for(var i = 0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         obj[arr[i]]= 1;
//     }

//     else{
//         obj[arr[i]]++
//     }
// }

// for(var value in obj){
//     if(obj[value]==1){
//         console.log(value)
//     }
// }





function runProgram(input) {
    var lines = input.trim().split("\n");

    var cases = +lines[0];
    var line=1;
    for(var i=0; i <cases; i++){
        var num= +lines[line++];
        var arr= lines[line++].trim().split(" ").map(Number);
     

        var obje={};
        for(var j=0; j < arr.length; j++){
            if(obje[arr[j]] == undefined){
                obje[arr[j]] =1;
            }else{
                obje[arr[j]]++;
            }
        }
       

        for(key in obje){
            if(obje[key] ==1){
                console.log(key);
                break;
            }
        }

    };

   


}

if (process.env.USERNAME === "hp") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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




// var obj ={};
// 	var count=0;
// 	for(var i=0;i<arr.length;i++){
// 	    if(!obj[arr[i]]){
// 	        obj[arr[i]]=1;
// 	    }
// 	    else{
// 	      obj[arr[i]]++;
// 	    }
// 	}
// 	for(var value in obj){
// 	    if(obj[value]==1){
// 	        console.log(value);
// 	    }
// 	    else{
	       
// 	    }
// 	}
