import {popupPhoto, openPopup} from "./parts.js";

export class Card {
    constructor(data, templateSelector) {
this._name = data.name;
this._link = data.link;
this._templateSelector = templateSelector;
    }
    _getCardTemplate() {
         return this._templateSelector.content.querySelector('.element').cloneNode(true);
    };

    createDefaultCards(){
        this._CardTemplate = this._getCardTemplate();
        this._CardTemplate.querySelector('.element__image').src = this._link;
        this._CardTemplate.querySelector('.element__image').alt = this._name;
        this._CardTemplate.querySelector('.element__image').name = this._name;
        this._CardTemplate.querySelector('.element__title').textContent = this._name;
        this._setEventListeners();
        return this._CardTemplate;
    };

    _togleLike() {
        this._CardTemplate.querySelector('.element__heart').classList.toggle('element__heart_active');
    };

    _removeCard() {
        this._CardTemplate.remove();
    }

    _openPopupPhoto(evt){
        popupPhoto.querySelector('.popup__image').src = evt.target.src;
        popupPhoto.querySelector('.popup__image').alt = evt.target.name;
        popupPhoto.querySelector('.popup__photo-title').textContent = evt.target.name;
    openPopup(popupPhoto);
    }

    _setEventListeners(){
        this._CardTemplate.querySelector('.element__heart').addEventListener('click', () => {
            this._togleLike();
        });
        this._CardTemplate.querySelector('.element__trash').addEventListener('click', () => {
            this._removeCard();
        });
        this._CardTemplate.querySelector('.element__image').addEventListener('click', (evt) => {
            this._openPopupPhoto(evt);


            
        });
    };
};