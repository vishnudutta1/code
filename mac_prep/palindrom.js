function Palindrom(str,l,r){
    if(l>=r){
        return "It is palindrome"
    }

    else if(str[l]!=str[r]){
        return "It is not palindrome"
    }

    return Palindrom(str,l+1,r-1)
}

var str = "abaa"
var l  = 0;
var r = 2;

console.log(Palindrom(str,l,r))