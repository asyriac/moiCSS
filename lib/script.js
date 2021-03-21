const btnClose = document.querySelectorAll('.btn-close');
const alertBox = document.querySelectorAll('.alert');

// Function to close
const closeEvent = (e) => {
    e.target.parentNode.style.display = 'none';
}

btnClose.forEach((btn) => {
    btn.addEventListener('click', closeEvent)
})