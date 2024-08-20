
/* Task 1 */
/* function reservedStrings() {
    const strReserved = str.split('').reverse().join('');

    return strReserved;
}   

let str=prompt("Enter a string");
console.log(reservedStrings()) */



/* Task 2 */
//------------------------------------------

/* function isEqualStrings( str1, str2 ) {
    //Convert it to lowercase first
    return str1.toLowerCase() === str2.toLowerCase();
}   

let str=prompt("Enter a string");
let str2=prompt("Enter another string");
console.log(isEqualStrings(str, str2)) */



/* Task 3 */
//------------------------------------------

function isUppercase(str) {
    if (str === str.toUpperCase()) {
      return true;
    }
    return false;
  }
  
  let str=prompt("Enter a string");
  console.log(isUppercase(str))