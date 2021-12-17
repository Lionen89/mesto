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
    resetValidation(popup);
};

// функция закртия открытой модалки 
const closeOpenedPopup = () => {
    document.querySelectorAll('.popup').forEach((popupElement) => {
        if (popupElement.classList.contains('popup_opened')) {
            closePopup(popupElement);
        }
    });
};

// фукция закрытия попапов по ESC
function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closeOpenedPopup(openedPopup)
    };
};

// фукция закрытия попапов по клику на оверлей

function closePopupByOverlay(evt) {
    if (evt.target.classList.contains("popup_opened")) {
        closeOpenedPopup()
    };
};
export {popupPhoto, openPopup, closePopup};