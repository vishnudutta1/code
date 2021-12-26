// You are provided an array A which has N elements.
// Your task is to find the count of such occurrence 
//where the element is larger than its neighbour.


// Input                               output
// [1,2,3,4,2,1,6,5]                   2


 var arra = [1,2,3,4,2,1,6,5]

 var count = 0;
 var count1 = 0;
 var count2 = 0
// var arr = [1,2,3,4,2,1,6,5]
for(var i = 0 ; i<arra.length ; i++ ){
    if(i==0 && arra[i]>arra[i+1]){
        count1++
    }
  else if(arra[i]>arra[i+1] && arra[i]>arra[i-1]){
    count++
  }
  
  else if(i==arra.length-1 && arra[i]>arra[arra.length-2] )
  count2++

}
console.log(count+count1+count2)