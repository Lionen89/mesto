const formAdd = document.querySelector('.popup_add').querySelector('.popup__form');
const formEdit = document.querySelector('.popup_edit').querySelector('.popup__form');
const formAvatar = document.querySelector('.popup_update-avatar').querySelector('.popup__form');
const nameInput = document.querySelector('.popup__text[name="name"]');
const jobInput = document.querySelector('.popup__text[name="description"]');
const elementTemplate = document.querySelector('.element-template');
const url = 'https://mesto.nomoreparties.co/v1/cohort-34';
const headers = {
    authorization: 'cfb2b6f5-426e-4056-b62c-e6e89dc9d392',
    'Content-Type': 'application/json',
};

// задаем обьект настроек
const objConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

export {
    formAdd,
    formEdit,
    formAvatar,
    nameInput,
    jobInput,
    elementTemplate,
    objConfig,
    url,
    headers
};