const id=12345
let name="Rashi"
let email="rashi@gmail.com"
var password ="232323145"
city="lucknow"

// id=9876 // not allowed because const can not be re-declared and updated

email="shi@gmail.com"
password="1256953"

/*
We not use var anymore as it issue in functional scope and it
can be re-declared and updated.
let keyword and not be re-decared but can be updated
*/

console.table([id,name,email,password,city])