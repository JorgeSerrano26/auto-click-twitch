let a = setInterval(() => {
    let el = document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0];
    if (el) {
        el.click();
        console.log("Collected");
    }
}, 120000);