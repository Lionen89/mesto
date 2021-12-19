import {FormValidator} from './FormValidator.js'
const popupPhoto = document.querySelector('.popup_photo');
// задаем обьект настроек
const objConfig = 
{
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

// функция закрытя попапов
const openPopup = (popup) => {
popup.classList.add('popup_opened');
document.addEventListener('keydown', closePopupByEsc);
document.addEventListener("click", closePopupByOverlay);
const form = popup.querySelector('.popup__form');
// запускаем валидацию
const val = new FormValidator(objConfig, form);
val.clearErrors(popup);
val.enableValidation();
};

// фукция закрытия попапов

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
    document.removeEventListener('click', closePopupByOverlay);
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