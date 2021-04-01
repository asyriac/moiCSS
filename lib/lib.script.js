// JS usage for toast
const toasts = document.querySelectorAll('.toasts');
const successToast = document.querySelectorAll('.successToast');
const errorToast = document.querySelectorAll('.errorToast');

const handleSucessToast = (toastMessage) => {

    const toastNotification = document.createElement('div');
    toastNotification.classList.add('toast-success');
    toastNotification.innerText = `${toastMessage}`
    toasts[0].appendChild(toastNotification);

    setTimeout(() => {
        toastNotification.remove();
    }, 2000);

}



const handleErrorToast = (toastMessage) => {

    const toastNotification = document.createElement('div');
    toastNotification.classList.add('toast-error');
    toastNotification.innerText = `${toastMessage}`
    toasts[0].appendChild(toastNotification);

    setTimeout(() => {
        toastNotification.remove();
    }, 2000);

}

successToast[0].addEventListener('click', () => handleSucessToast('My message goes here.'))
errorToast[0].addEventListener('click', () => handleErrorToast('My message goes here.'))