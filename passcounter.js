let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
console.log(saveEl);
function increment(){
    count += 1;
    countEl.textContent = count;
}
function save(){
    let countStr = count + " - " ;
    saveEl.textContent += countStr;
    countEl.innerText = 0;
    count = 0;
}


// Practice section

        //  1...
// let name = "Vanshika";
// let greeting = "Hi there";
// function greetVanshika(){
//     console.log(greeting + " , " + name + "!");
// }
// greetVanshika();

       // 2...
// let myPoints = 3;
// function add3Points(){
//     myPoints += 3;
// }
// function remove1Point(){
//    myPoints -= 1;
// }
// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();
// console.log(myPoints);
