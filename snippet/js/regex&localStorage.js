
//local storage
JSON.stringify()
JSON.parse()

let user = {
    emri: "elsa",
    mbiemri: "shala"
}
localStorage.setItem("user", JSON.stringify(user))
let user1 = JSON.parse(localStorage.getItem("user"))

localStorage.setItem("username");
let name = localStorage.getItem("username");