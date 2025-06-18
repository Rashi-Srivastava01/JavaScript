
//Basic comparison
console.log(4>1);//true
console.log(4==4);//true

//comparison problem by using different datatypes
console.log("2">1);//true


console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true  //the reason is that the equality check and comparisons work differently.Comparison converts null to number as 0.

/* In undefined case when compared with 0 it give false in every case
This is not right way to compare.
*/

//USE of ===
console.log("2"===1);//false
//It check datatype equality also 
