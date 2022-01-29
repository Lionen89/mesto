import Popup from "./Popup";
export default class PopupWithYes extends Popup{
    constructor(popupSelector, callbackSubmit) {
    super(popupSelector)
    this._callbackSubmit = callbackSubmit
}

open(id){
    this.id = id;
    super.open();
}

setEventListeners(){
    super.setEventListeners();
        this._popup.querySelector('.popup__save-button').addEventListener('click', () => {
            this._callbackSubmit(this.id);
            this.close();
        });
    };
}
