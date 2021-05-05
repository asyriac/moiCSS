const btnClose = document.querySelectorAll('.btn-close');
const alertBox = document.querySelectorAll('.alert');
const modalContainer = document.querySelectorAll('.modal');
const modalToggle = document.querySelectorAll('.modal-toggle');
const modalClose = document.querySelectorAll('.modal-close')

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

modalClose[0].addEventListener('click', () => {
    modalContainer[0].classList.remove("show")
})

if (modalToggle.length) {
    modalToggle[0].addEventListener('click', () => {
        modalContainer[0].classList.add("show")
    })
}


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-vertical')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('nav-vertical-responsive')
})