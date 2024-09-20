const tel = "045593145"
let person = {
    name: "rina",
    age: 18,
    city: "Gjilan",
    tel
}
const { name, age, city } = person;

let person2 = { ...person, name: "elsa" };
// njejt edhe me arrays
names = ["rina", "elsa", "viola", "rina", "rina"]
// mas shumti map edhe filter
map();
names.map((name) => {
    return name + "1"
})
filter();
names.filter((name) => {
    return name !== "rina";
    // i hek emrat rina 
})
reduce();