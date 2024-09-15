class Person {
    // definimi i klases (person)
    constructor(name, surname, age) {
        // konstruktori i klases
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    // PROTOTYPE METHODS
    getSurname() {
        return this.surname
    }
    // STATIC METHODS
    static adress() {
        console.log("gjilan")
    }
}
// tash kur dojm me deklaru nje person p.sh
let Rina = new Person("rina", "shala", 18);
// mujna hala tjer sat dojna
// kjo new duhet gjith

rina.getSurname();
// te statici mujna me definusen
Person.adress();
class adress {
    x;
    #y = 20;
    // nese i vnojna # perpara ajo so e qasme ma jashte(private)
}

class njeri extends Person {
    constructor(name, surname, age, city) {
        super(name, surname, age);
        this.city = city
    }
    // kshtu  kur dojna me pas accses te klases prind nket rast person
}
console.log(njeri("rina", "shala", 18, "gjilan"))