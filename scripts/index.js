const mobileMenuBtn = document.querySelector('.button__mobile-menu');
const popupMobileMenu = document.querySelector('.popup__nav');


function openModileMenu(popup) {
    popup.classList.toggle('popup__hidden');
}

mobileMenuBtn.addEventListener('click', () => {
    console.log('click');
    openModileMenu(popupMobileMenu);
})