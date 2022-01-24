// var tar = 1;

// var arr = [1,2,3,4,5]

// var evenArra = ""

// var oddArr = ""

// var final = ""

// if(tar ==1){
//     for(var i = 0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             evenArra = evenArra + arr[i]+" "
//         }
//         else{
//             oddArr  = oddArr + arr[i]+" "
//         }
//     }
// }

// final = evenArra + oddArr

// console.log(final.trim())


function OddEvenSepra(N, arr, Q) {
    //write code here
      var evn = []



      var od = []



  
      for (var i = 0; i < N; i++){


          if (arr[i] % 2 == 0){


              evn.push(arr[i])


          }else {


              od.push(arr[i])
          }
      }
  
      if (Q === 1){
         console.log(evn.concat(od).join(' '))


      }else if(Q === 2){  
          console.log(od.concat(evn).join(' '))

          
      }
  }
  
  
  OddEvenSepra(5,[1,2,3,4,5],1)