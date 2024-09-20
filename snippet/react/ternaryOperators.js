let age = 16;
let name = age > 10 ? "pedro" : "rina";
// nese o true (age>10) jepja tparen else tdyten
let name2 = age > 10 && "pedro";
// nese o true jepja
function emri() {
    return age > 10 ? <div>pedro</div> : <div>rina</div>
}
// mujna edhe qeshtu
function example() {
    return condition1 ? value1
        : condition2 ? value2
            : condition3 ? value3
                : value4;
}
// if else if else if else