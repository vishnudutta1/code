var h = 625;

var t = 144

var l = 0

while(l<=h){
    var mid = Math.floor(l +(h-l)/2)

    var m = mid*mid

    if(m==t){
        console.log(mid)
        break;
    }

    else if(m>t){
        h = mid-1
    }

    else if(m<t){
        l = mid+1
    }



}