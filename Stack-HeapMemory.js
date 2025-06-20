// Stack Memory (Primitive datatype)
// The variable we declared we get copy of that 

let flower="lily"
let anotherName=flower
console.log(anotherName);//lily


anotherName="sunflower"
console.log(anotherName);//sunflower
console.log(flower);//lily



//Heap Memory (Non-primitive)
//we get reference value

let userOne ={
    name:"rashi",
    course:"bca"
}
let userTwo = userOne
userTwo.course= "bcom"

console.log(userOne.course);//bcom
console.log(userTwo.course);//bcom
// we get reference that means we update the original value