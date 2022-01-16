var arr = [1,2,3,4,5];

var tar = 2;

var count = 0;

var l = 0;


for(var i = arr.length-1;i>=0;i--){

    var h = i-1;

    var mid = Math.floor(l+ (h-l)/2);
    
    while(l<=h){
        
       if((arr[i]-arr[mid])==tar){
           count++
       }

       else if((arr[i]-arr[mid])>tar){
           l = mid+1;
       }

       else if((arr[i]-arr[mid])<tar){
        h = mid-1;
    }

    }
}

if(count>0){
    console.log("Yes")
}
else{
    console.log("No")
}



