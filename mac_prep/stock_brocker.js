//var arr = [7,1,5,3,6,4]

function min(arr){
    var min = arr[0]

    for(var i = 0;i <arr.length;i++){
        if(min>arr[i]){
            min = arr[i]
        }
    }
    return min
}



//console.log(min(arr))

function inde(arr,n){
    for(var i = 0;i <arr.length;i++){
        if(arr[i]==n){
            return i
        }
    }
}

function maxi(arr,indx){
    var max = arr[indx+1]
    
    for(var i = indx+1;i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i]
        }
    }
    return max
    }
    





function runProgram(input) {
    var input = input.trim().split("\n");
    var testcase = +input[0]
   // console.log(testcase)
    var line = 1 
    for(var i = 0;i<testcase;i++){
        var size = input[line].trim().split(" ").map(Number);
        line++
        var arr = input[line].trim().split(" ").map(Number)
        line++
        var mini = min(arr)

        var indx = inde(arr,mini) 
        
        if(indx==arr.length-1){
            console.log(0)
        }
        else{
        //console.log(inde(arr,3))
        
        //console.log(mini,indx)
        
        
        //console.log(maxi(arr,indx))
        
        var profit = maxi(arr,indx)-min(arr)
        
        console.log(profit)
    }

    



}
  
  
}
  
  
  if (process.env.USERNAME === "hp") {
  runProgram(`2
  6
  7 1 5 3 6 4
  4
  4 3 2 1
  `);
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
  
  