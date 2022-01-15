import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    open(data) {
        super.open();
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popupPhotoTitle.textContent = data.name;
    }
}