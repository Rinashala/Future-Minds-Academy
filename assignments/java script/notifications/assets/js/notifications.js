let originalTitle = document.title;
let originalFavicon = document.querySelector('link[rel="icon"]').href;

let interval;

function startNotification(text) {
    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        document.title = document.title === text ? originalTitle : text;
        let favicon = document.querySelector('link[rel="icon"]');
        favicon.href = favicon.href === originalFavicon ? "assets/img/4.webp?v=" : originalFavicon;
    }, 1000);
}

function endNotification() {
    if (interval) {
        clearInterval(interval);
    }

    document.title = originalTitle;
    let favicon = document.querySelector('link[rel="icon"]');
    favicon.href = originalFavicon;
}
