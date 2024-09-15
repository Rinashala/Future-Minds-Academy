window.innerHeight;
window.open;
window.close;
window.moveTo;
window.resizeTo();
location.reload();
// me refresh
// this
this.console.log("rina");
// ktu this i referohet windowit
function highlight(color) {
    this.style.background = color
}
let element = document.getElementById("ele")
highlight.call(element, "yellow");
// kjo o qysh mja ndrru this vleren
// arrays
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

let numbers1 = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

let numbers7 = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

let numbers6 = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10);
console.log(found); // 12

let numbers2 = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

let numbers3 = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers); // [1, 5, 10, 25, 40, 100]

let sentence3 = "Hello world, welcome to JavaScript";
let words3 = sentence.split(" ");
console.log(words); // ['Hello', 'world,', 'welcome', 'to', 'JavaScript']

let words4 = ['Hello', 'world', 'JavaScript'];
let sentence = words.join(" ");
console.log(sentence); // "Hello world JavaScript"

let numbers5 = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
