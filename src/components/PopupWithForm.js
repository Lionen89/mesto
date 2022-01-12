import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._popupForm = this._popupSelector.querySelector('.popup__form');
        this._popupInputList = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        this._inputValues = {
            name: this._popupInputList[0].value,
            link: this._popupInputList[1].value,
            description: this._popupInputList[1].value
        };
        return this._inputValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.querySelector('.popup__close-button').addEventListener('click', this.close())
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmitForm(this._getInputValues());
        });
    };

    close() {
        super.close();
        this._popupForm.reset();
    };
}
