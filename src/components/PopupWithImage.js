import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector, callbackSubmitForm),
        this._popupImage = this._popup.querySelector('.popup__image'),
        this._popupPhotoTitle = this._popup.querySelector('.popup__photo-title')
    }
    open(data) {
        super.open();
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popupPhotoTitle.textContent = data.name;
    }
}