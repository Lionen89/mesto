import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    open(data) {
        super.open();
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popup.querySelector('.popup__photo-title').textContent = data.name;
    }
}