let userManagement = document.querySelector("#userManagement");
let learningPlan = document.querySelector("#learningPlan");
let discussions = document.querySelector("#discussions");
let report = document.querySelector("#report");


let pageFeed = document.querySelector("#pageFeed")

userManagement.addEventListener("click", () => {
    pageFeed.innerHTML = `
    <h1>${feedPages[0].title}</h1>
    <p>${feedPages[0].dscp}
    `
});
report.addEventListener("click", () => {
    pageFeed.innerHTML = `
    <h1>${feedPages[1].title}</h1>
    <p>${feedPages[1].dscp}
    `
});
learningPlan.addEventListener("click", () => {
    pageFeed.innerHTML = `
    <h1>${feedPages[2].title}</h1>
    <p>${feedPages[2].dscp}
    `
});

discussions.addEventListener("click", () => {
    pageFeed.innerHTML = `
    <h1>${feedPages[3].title}</h1>
    <p>${feedPages[3].dscp}
    `
});


