// function getWords() {
//     let name = ['avi','asi','natan','chen'];

//    name.sort()
//    console.log(name);
    
// }
// getWords();

// function getNumbers() {
//     let num = [1,2,8,10,15];
//     num.sort((a,b)=>{ return a-b})
//     console.log(num);
    
// }
// getNumbers();

// function getNumbersFromBtS() {
//     let num = [1,2,8,10,15];
//     num.sort((a,b)=>{ return b-a})
//     console.log(num);
    
// }

let userValue = [];
let nameFromUser = document.getElementById('NumArray');
function BTN() {
    userValue.push(nameFromUser.value);
    userValue.join(",")
    userValue.sort()
    console.log(userValue)
    
  } 

