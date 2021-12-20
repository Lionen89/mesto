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

    // Метод деактивации кнопки

    disableButton() {
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        buttonElement.classList.add(this._inactiveButtonClass);   
    }

    // Метод сброса ошибок

    clearErrors() {
        this._inputList.forEach((inputElement) => {
            if (inputElement.classList.contains('popup__input_type_error')) {
                this._hideInputError(inputElement)
            }
        });
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
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(this._inputList, buttonElement);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList, buttonElement);
            });
        });
    };
    // Метод проверки валидации
    enableValidation = () => {
        this._formElement.addEventListener('submit', function (evt) {
                evt.preventDefault();
            });
            this._setEventListeners(this._formElement);
        };
};