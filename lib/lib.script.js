// JS usage for toast
const toasts = document.querySelectorAll('.toasts');
const tstBtn = document.querySelectorAll('.tstBtn');

const handleToast = (toastMessage) => {

    const toastNotification = document.createElement('div');
    toastNotification.classList.add('toast');
    toastNotification.innerText = `${toastMessage}`
    toasts[0].appendChild(toastNotification);

    setTimeout(() => {
        toastNotification.remove();
    }, 2000);

}

tstBtn[0].addEventListener('click', () => handleToast('My message goes here.'))