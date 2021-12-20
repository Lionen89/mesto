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
        this._cardTemplate = this._getCardTemplate();
        this._cardTemplate.querySelector('.element__image').src = this._link;
        this._cardTemplate.querySelector('.element__image').alt = this._name;
        this._cardTemplate.querySelector('.element__image').name = this._name;
        this._cardTemplate.querySelector('.element__title').textContent = this._name;
        this._setEventListeners();
        return this._cardTemplate;
    };

    _togleLike() {
        this._cardTemplate.querySelector('.element__heart').classList.toggle('element__heart_active');
    };

    _removeCard() {
        this._cardTemplate.remove();
        this._cardTemplate = null;
    }

    _openPopupPhoto(){
        popupPhoto.querySelector('.popup__image').src = this._link;
        popupPhoto.querySelector('.popup__image').alt = this._name;
        popupPhoto.querySelector('.popup__photo-title').textContent = this._name;
    openPopup(popupPhoto);
    }

    _setEventListeners(){
        this._cardTemplate.querySelector('.element__heart').addEventListener('click', () => {
            this._togleLike();
        });
        this._cardTemplate.querySelector('.element__trash').addEventListener('click', () => {
            this._removeCard();
        });
        this._cardTemplate.querySelector('.element__image').addEventListener('click', () => {
            this._openPopupPhoto();
          
        });
    };
};