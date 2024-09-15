btn.addEventListener("click", button);
btn.removeEventListener("click", button);
document.addEventListener("keypress", (event) => {
    let char = event.key;
    console.log(char)
})
document.addEventListener("click", (event) => {
    console.log(event.clientX);
    console.log(event.clientY);
});
// Calculate the offset from the top-left corner of the box 
offsetX = event.clientX - boxes.getBoundingClientRect().left;
offsetY = event.clientY - boxes.getBoundingClientRect().top;
// The getBoundingClientRect() method is a powerful tool in JavaScript that provides information about an element's position and size relative to the viewport.
<li onclick="this.classList.add('highlight')"></li>
let list = document.querySelector(".list");
list.addEventListener("click", (event => {
    if (event.target.tagName == "LI") {
        event.target.toggle("highlight");
    }
}));
onchange
onclick
onmouseover
onmouseout
onkeydown
onload	
