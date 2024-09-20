secs = secs < 2 ? "0" + secs : secs;
// if per s'shkurti ( kjo po thot se nese secs osht ma e vogel se 2 shtoja "0" secs)
function changeSeason(season, imagePath) {
    imgContainer.innerHTML = `<img class="img-xxl seasonImg" src="${imagePath}" alt="${season}"/>`;
    title.textContent = season;
}
// img path me ndrru 
function startTimer() {
    let countTime = setInterval(() => {
        countDown.textContent = count;
        if (count == 0) {
            clearInterval(countTime);
        }
        else {
            count--;
        }

    }, 1000);
}
// interval
addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight') {
        catObj.x += catObj.speed
    }
    if (e.key == 'ArrowLeft') {
        catObj.x -= catObj.speed
    }
    if (e.key == 'ArrowDown') {
        catObj.y += catObj.speed
    }
    if (e.key == 'ArrowUp') {
        catObj.y -= catObj.speed
    }
});
// me shigjeta
tempSelect.addEventListener("change", function (e) {
    temp.textContent = e.target.value;
});
// me ja ndrru vleren psh ni h1.temp permes value te tjeter kujt
function outer() {
    let i = 100;
    function inner(params) {
        let y = 2;
        document.write(i - 2);
        // funksioni outer e merr te inner a inner te outerit jo  kshtu qe e shkrujna :
    }
    outer.inner = inner
}
// tash bon
movies = movies.sort((a, b) => {
    if (a.rating > b.rating) {
        return - 1;
    } else if (a.rating < b.rating) {
        return 1;
    } else {
        return 0;
    }
});

function rank(hr) {
    let max = hr[0];
    for (i = 0; i < hr.length; i++) {
        if (hr[i] > max) { max = hr[i]; }
    }
    return max;
}
let highestRanking = rank(movies);
console.log(highestRanking)
// me i ranku
let f = ({ emri, surname } = { rina, shala }) => {
    document.write("emri eshte" + emri);
    document.write("mbiemri eshte" + surname);
};
n = [1, 11, 34, 25, 9];
// se sorti ben sort te strings veq
n.sort((a, d) => {
    if (a < b) return -1;
});
// high-order function

let amount = 10;
try {
    if (typeof (amount) != "number") {
        throw "type a number"
    }
    if (amoount < 100) {
        throw "we need more!"
    }
}
catch (e) {
    document.write(e)
}
finally {
    console.log("you did it")
}
// IIFE
let IIFE = (function (a, b) {
    let sum = a + b;
    return sum;
}(3, 4))
let IIFEstring = (function (a, b) {
    let message = "rina ma e mira";
    console.log(message);
}())
// IIFE are functions that are created and invoked immediately they can't be called again. 
console.error(error)
// e bon consolen tkuqe
