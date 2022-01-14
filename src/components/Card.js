export default class Card {
    constructor(data, templateSelector, handleCardClick) {
this._data = data;
this._name = data.name;
this._link = data.link;
this._templateSelector = templateSelector;
this._handleCardClick = handleCardClick
    }
    _getCardTemplate() {
         return this._templateSelector.content.querySelector('.element').cloneNode(true);
    };

    createCards(){
        this._cardTemplate = this._getCardTemplate();
        this._cardTemplateImage = this._cardTemplate.querySelector('.element__image');
        this._cardTemplateText = this._cardTemplate.querySelector('.element__title');
        this._likeButton = this._cardTemplate.querySelector('.element__heart');
        this._cardTemplateImage.src = this._link;
        this._cardTemplateImage.alt = this._name;
        this._cardTemplateImage.name = this._name;
        this._cardTemplateText.textContent = this._name;
        this._setEventListeners();
        return this._cardTemplate;
    };

    _togleLike() {
        this._likeButton.classList.toggle('element__heart_active');
    };

    _removeCard() {
        this._cardTemplate.remove();
        this._cardTemplate = null;
    }

    _setEventListeners(){
        this._likeButton.addEventListener('click', () => {
            this._togleLike();
        });
        this._cardTemplate.querySelector('.element__trash').addEventListener('click', () => {
            this._removeCard();
        });
        this._cardTemplateImage.addEventListener('click', () => {
            this._handleCardClick(this._data);
          
        });
    };
};