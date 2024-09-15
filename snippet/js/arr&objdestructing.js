let s1, s2;
[s1 = "rins", s2 = "shala"] = [20];
// tash s1 bohet 20 a s2 met qashtu
[s1, s2] = [s2, s1];
// mi swap
function f() {
    [1, 2];
}
let a, b;
[a, b] = f();
// mi marr pi funksionit
function f() {
    [1, 2, 3];
};
[a, , b] = f();
// kjo e injoron 2 tash edhe c me bo nconsole del 1
function f() {
    [1, 2, 3, 4, 5];
};
[a, b, ...c] = f();
// a=1 b=2 c=tjerat edhe duhet mebo .toString() se tash kjo o array
let rina = {
    nr1: 1,
    nr2: 2
}
const { nr1, nr2 } = rina;
// kur ti bojna veq a veq mu shkru bojn
let d, e;
({ d, e } = { d: "rina", e: "elsa" });
// per mja vnu vlerat
const { s3 = "rins", s4 = "shala" } = { s3: 20 };
// vlerat
let elsa = [r, sh];
let elsash = [k, l];
let rinash = [...elsa, o, i, ...elsash];
// ja merr vlerat, njejt edhe per obj
const merge = (...objects) => ({ ...objects });
let merged = merge(elsa, elsash);
// bohen bashk
let r = "emri";
let objekt = {
    mbiemri: "Shala",
    [r]: "Rina"
}
// nmnyr dinamike me vnu objekt