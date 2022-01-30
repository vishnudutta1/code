var arr1 = [12,14,15,6]

var arr2 = [8,6,7,5]

for(var i = 0;i <arr1.length;i++){
    for(var j = 0;j<arr2.length;j++){
        if(i==j && arr1[i]<=15 && arr2[j] <=7){

            console.log("Boarding")
            
        }

         if(i==j && arr1[i]>15 || arr2[j]>7){
            console.log("Stop")
        }
    }
}