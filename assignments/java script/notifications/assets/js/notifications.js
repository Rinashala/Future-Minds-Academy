let originalTitle = document.title;
let originalFavicon = document.querySelector("link[rel='icon']").getAttribute("href");
let notificationInterval;
let isNotificationRunning = false;

function startNotification(text) {
    if (isNotificationRunning) {
        endNotification();
    }

    isNotificationRunning = true;

    let showNotification = true;

    notificationInterval = setInterval(() => {
        if (showNotification) {
            document.title = text;
            document.querySelector("link[rel='icon']").setAttribute("href", "assets/img/2.webp");
        } else {
            document.title = originalTitle;
            document.querySelector("link[rel='icon']").setAttribute("href", originalFavicon);
        }
        showNotification = !showNotification;
    }, 1000);
}

function endNotification() {
    if (notificationInterval) {
        clearInterval(notificationInterval);
        notificationInterval = null;
    }
    document.title = originalTitle;
    document.querySelector("link[rel='icon']").setAttribute("href", originalFavicon);
    isNotificationRunning = false;
}
