const btnClose = document.querySelectorAll('.btn-close');
const alertBox = document.querySelectorAll('.alert');
const modalContainer = document.querySelectorAll('.modal-container');
const modalToggle = document.querySelectorAll('.modal-toggle');

// Function to close
const closeEvent = (e) => {
    switch (e.target.parentNode.classList[0]) {
        case 'modal':
            modalContainer[0].style.display = 'none'
            break;
        default:
            e.target.parentNode.style.display = 'none';
    }

}

btnClose.forEach((btn) => {
    btn.addEventListener('click', closeEvent)
})

if (modalToggle.length) {
    modalToggle[0].addEventListener('click', () => {
        modalContainer[0].style.display = 'flex';
    })
}

