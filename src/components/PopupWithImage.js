import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    open(data) {
        super.open();
        this._popupSelector.querySelector('.popup__image').src = data.link;
        this._popupSelector.querySelector('.popup__image').alt = data.name;
        this._popupSelector.querySelector('.popup__photo-title').textContent = data.name;
        this._popupSelector.classList.add('popup_opened');
    }
}