let person = {
    name: "rina",
    logThis: function callName() {
        console.log(this)
    }
}
person.logThis();
// this ne objekt nenkupton objektin
this.console.log("rina");
// this jashta krejtav nenkupton windowin
function highlight(color) {
    this.style.backgroundColor = color
};
let el = document.querySelector(".rina");
highlight.call(el, "red");
// <p onclick="highlight.call(this,"red")">ekuqe</p>
//  instead of doing highlight('yellow'), we use the .call() function to call it and provide the meaning of this. Kur dojna mja ndrru value edhe me ja caktu 