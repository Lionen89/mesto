import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupInputList = this._popup.querySelectorAll('.popup__input');
    }

    getInputValues() {
        this._inputValues = {};
        this._popupInputList.forEach(input => {
                this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmitForm(this.getInputValues());
        });
    };

    close() {
        this._popupForm.reset();
        super.close();
    };
}
