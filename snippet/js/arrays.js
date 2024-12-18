let products = [
    {
        emri: "rina",
        mbiemri: "shala",
        age: 18
    },
    {
        emri: "riona",
        mbiemri: "shala",
        age: 25
    }
];


products[0].emri += "rina";
console.log(products[0].emri);
products.push({
    emri: "viola",
    mbiemri: "shala",
    age: 28
});

let lastProduct = products.pop();
products.forEach((product) => {
    console.log(product.emri);
});

let removedProduct = products.splice(1, 1);
products.splice(1, 1, {
    emri: "newname",
    mbiemri: "lastname",
    age: 30
});

let filteredProducts = products.filter(product => product.age > 20);
console.log("Filtered products:", filteredProducts);
console.log("Original products array:", products);


products[3] = {
    emri: "elsa",
    mbiemri: "shala"
}

Numbers = [1, 2, 3, 4];
Numbers.forEach(double);
function double(element, index, array) {
    array[index] = element * 2;
}
Numbers.forEach((num) => {
    console.log(num)
});
// other

// array functions
map()
// Numbers = Numbers.map((number) => number * 2);
// modify every element of an array mi shumzu a qkado
filter()
// mi filtru
reduce()
// let sum = Numbers.reduce((sum, number) => sum += number, 0);
// ,0 o psh kesjt kasj vlere qe e fitojna kena me ja shtu ni vler tjt kjo mun mu kon let balance=100;
// edhe tani vend te 0 me shkru balance
find()
// let result = Numbers.find((numberr) => numberr < 2);
some()
every()
// return boolean values and check whether some of all elements fulfill a certain condition  edhe some edhe every
sort()
split()
join()
reverse()
// mujna me perdor dy p.sh  numbers.filter().map()