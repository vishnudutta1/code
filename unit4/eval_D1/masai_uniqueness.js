
// function runProgram(input) {
// let st = input.trim();
// let data = {}; 
// //console.log(st)

// if(Find_uniq(st)){
//     console.log("Unique");
// }

// else{
//     console.log("No")
// }
// }

// function Find_uniq(st){
//     for(var i = 0;i<st.length;i++){
//         if(data[st[i]]===undefined){
//             data[st[i]=1]
//         }

//         else{
//             let before = data[st[i]];
//             data[st[i]] = before+1
//         }
//     }

//     let valu = Object.values(data);
//     for(var i = 0;i<valu.length;i++){
//         if(valu[i]>1){
//             return false;
//         }
//     }
//     return true;
// }



// if (process.env.USERNAME === "Gaurav") {
// runProgram(`masai`);
// } else {
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0) ;
// });
// }



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