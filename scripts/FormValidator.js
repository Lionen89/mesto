export class FormValidator {
    constructor(obj, formElement) {
        this._formSelector = obj.formSelector;
        this._inputSelector = obj.inputSelector;
        this._submitButtonSelector = obj.submitButtonSelector;
        this._inactiveButtonClass = obj.inactiveButtonClass;
        this._inputErrorClass = obj.inputErrorClass;
        this._errorClass = obj.errorClass;
        this._formElement = formElement;

     };
    // Метод для показа ошибки
    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    // Метод сброса ошибок и деактивации кнопки

    clearErrors(popup) {
        const formElement = popup.querySelector('.popup__form')
        if (!formElement) {
            return
        };
        const inputList = formElement.querySelectorAll('.popup__input')
        inputList.forEach((inputElement) => {
            if (inputElement.classList.contains('popup__input_type_error')) {
                this._hideInputError(inputElement)
            }
        });
        const buttonElement = popup.querySelector('.popup__save-button');
        const inactiveButtonClass = 'popup__save-button_disabled';
        buttonElement.classList.add(inactiveButtonClass);
    };
    // Метод для скрытия ошибки
    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };
    // Метод проверки валидации инпутов
    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };
    // Метод проверки наличия невалиданых инпутов
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };
    // Метод переключения кнопки
    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass)
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        };
    };
    // Метод для отслеживания состояние кнопки сабмита 
    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };
    // Метод проверки валидации
    enableValidation = () => {
        const formList = Array.from(document.querySelectorAll(this._formSelector));
        formList.forEach((formElement) => {
            formElement.addEventListener('submit', function (evt) {
                evt.preventDefault();
            });

            this._setEventListeners(formElement);
        });
    };
//     enableValidation({
//         formSelector: '.popup__form',
//         inputSelector: '.popup__input',
//         submitButtonSelector: '.popup__save-button',
//         inactiveButtonClass: 'popup__save-button_disabled',
//         inputErrorClass: 'popup__input_type_error',
//         errorClass: 'popup__error_visible'
// });
};