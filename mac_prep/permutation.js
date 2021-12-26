
function permutation(arr,news,curr){
    
    if(curr ==arr.length){
        news.push(arr.join(" "));
        return news;
    }

    for(var i = curr;i<arr.length;i++){

        swap(arr,i,curr);
        permutation(arr,news,curr+1)
        swap(arr,i,curr)
    }

    return news;
}

function swap(arr,i,curr){
    let temp = arr[i]
    arr[i] = arr[curr];
    arr[curr] = temp;
}

function runProgram(input) {
	// Write code here
   input = input.trim().split("\n");
   var n = +input[0]
   var arr = input[1].trim().split(" ").map(Number)
   var res = permutation(arr,[],0)
    res.sort()
	for(var i = 0; i <res.length;i++){
		console.log(res[i])
	}

  }
  if (process.env.USERNAME === "hp") {
	runProgram(`3
	1 2 3`);
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