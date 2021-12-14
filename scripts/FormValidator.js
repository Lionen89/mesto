export class FormValidator  {
constructor(obj, formElement) {};
// Фукция для показа ошибки
_showInputError = (formElement, inputElement, errorMessage, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);
};

// фукция сброса ошибок и деактивации кнопки

function resetValidation(popup) {
    const formElement = popup.querySelector('.popup__form')
    if (!formElement){
        return};
    const inputList = formElement.querySelectorAll('.popup__input')
    inputList.forEach((inputElement) => {
        if (inputElement.classList.contains('popup__input_type_error')) {
            const obj = {
                inputErrorClass: 'popup__input_type_error',
                errorClass: 'popup__error_visible'
            }
            hideInputError(formElement, inputElement, obj)
        }
    });
    const buttonElement = popup.querySelector('.popup__save-button');
    const inactiveButtonClass = 'popup__save-button_disabled';
    buttonElement.classList.add(inactiveButtonClass);
};
// Фукция для скрытия ошибки
const hideInputError = (formElement, inputElement, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(obj.inputErrorClass);
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';
};
// Фукция проверки валидации инпутов
const checkInputValidity = (formElement, inputElement, obj) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, obj);
    } else {
        hideInputError(formElement, inputElement, obj);
    }
};
// Фукция проверки наличия невалиданых инпутов
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};
// Фукция переключения кнопки
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass)
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    };
};
// Функция для отслеживания состояние кнопки сабмита 
const setEventListeners = (obj, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, obj.inactiveButtonClass);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, obj);
            toggleButtonState(inputList, buttonElement, obj.inactiveButtonClass);
        });
    });
};
// Основная функия проверки валидации
const enableValidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });

        setEventListeners(obj, formElement);
    });
};
// Вызыв функии с обьектом из параметров внури
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});
};