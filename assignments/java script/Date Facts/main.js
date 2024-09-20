const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open('GET', 'https://numbersapi.p.rapidapi.com/6/21/date');
xhr.setRequestHeader('x-rapidapi-key', '87043d0b46mshed95f5d54792de8p1d9fddjsn39a732cc8236');
xhr.setRequestHeader('x-rapidapi-host', 'numbersapi.p.rapidapi.com');

xhr.send(data);