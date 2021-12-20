const popupPhoto = document.querySelector('.popup_photo');

// функция закрытя попапов
const openPopup = (popup) => {
popup.classList.add('popup_opened');
document.addEventListener('keydown', closePopupByEsc);
document.addEventListener("click", closePopupByOverlay);
};

// фукция закрытия попапов

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
    document.removeEventListener('click', closePopupByOverlay);
};

// фукция закрытия попапов по ESC
function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    };
};

// фукция закрытия попапов по клику на оверлей

function closePopupByOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    };
};
export {popupPhoto, openPopup, closePopup};