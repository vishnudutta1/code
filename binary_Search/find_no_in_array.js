var arr = [2,4,8,12,16,19,21,27,32]

var tar = 27;

var l = 0;

var h = arr.length-1



while(l<=h){

    var mid = Math.floor(l +(h-l)/2)

    if(arr[mid]==tar){
        console.log("true")
        break;
    }
    
    if(arr[mid]>tar){
        h = mid-1;
    }
    
    if (arr[mid]<tar){
        l = mid+1
    }
    
}



