import { data } from "./parts";
import { openPopup } from "./parts";
export class Card {
    constructor(data, templateSelector) {
this._name = data.name;
this._link = data.link;
this._templateSelector = templateSelector;
    }
    _getCardTemplate() {
        this._CardTemplate = this._templateSelector.content.querySelector('.element').cloneNode(true);
    };

    _createDefaultCards(){
        this._CardTemplate.querySelector('.element__image').src = this._link;
        this._CardTemplate.querySelector('.element__image').alt = this.name;
        this._CardTemplate.querySelector('.element__description > .element__title').textContent = this.name;
    };

    _togleLike() {
        this.CardTemplate.querySelector('.element__heart').classList.toggle('element__heart_active');
    };

    _removeCard() {
        this.CardTemplate.remove();
    }

    _setEventListeners(){
        this._CardTemplate.querySelector('.element__heart').addEventListener('click', () => {
            this._togleLike();
        });
        this._CardTemplate.querySelector('.element__trash').addEventListener('click', () => {
            this._removeCard();
        });
    };
};