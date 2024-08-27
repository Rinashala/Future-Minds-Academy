let originalTitle = document.title;
let originalFavicon = document.querySelector('link[rel="icon"]').href;
let interval;
function startNotification(text) {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {

    }, 1000);
}
interval = setInterval(() => { startNotification(text) }, 1000);
function endNotification() {
    if (interval) {
        clearInterval(interval);
    }
    document.title = originalTitle;
    let favicon = document.querySelector('link[rel="icon"]');
    favicon.href = originalFavicon;

}
