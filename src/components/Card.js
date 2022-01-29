export default class Card {
    constructor(data, templateSelector, myUserID, handleCardClick, handleTrashClick, handleSetLike, handleDeleteLike) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._userID = data.owner._id;
        this._templateSelector = templateSelector;
        this._myUserID = myUserID;
        this._handleCardClick = handleCardClick;
        this._handleTrashClick = handleTrashClick;
        this._handleSetLike = handleSetLike;
        this._handleDeleteLike = handleDeleteLike;
    }
    _getCardTemplate() {
        return this._templateSelector.content.querySelector('.element').cloneNode(true);
    };

    _setTrashElement() {
        if (this._userID === this._myUserID) {
            this._elementTrash.classList.add('element__trash_active');
        }
    }

    _setElementID() {
        this._cardTemplate.setAttribute('id', this._data._id);
    }

    _setLikesAmount(data) {
        this._cardTemplate.querySelector('.element__heart-amount').textContent = this._data.likes.length;
    }

    createCards() {
        this._cardTemplate = this._getCardTemplate();
        this._cardTemplateImage = this._cardTemplate.querySelector('.element__image');
        this._cardTemplateText = this._cardTemplate.querySelector('.element__title');
        this._likeButton = this._cardTemplate.querySelector('.element__heart');
        this._elementTrash = this._cardTemplate.querySelector('.element__trash');
        this._setTrashElement();
        this._setElementID();
        this._cardTemplateImage.src = this._link;
        this._cardTemplateImage.alt = this._name;
        this._cardTemplateImage.name = this._name;
        this._cardTemplateText.textContent = this._name;
        this._setLikesAmount();
        this._checkLikes();
        this._setEventListeners();
        return this._cardTemplate;
    };

    _setLike() {
        this._likeButton.classList.add('element__heart_active');
    };

    _deleteLike() {
        this._likeButton.classList.remove('element__heart_active');
    };

    _checkLikes() {
        this._data.likes.forEach(element => {
            if (Object.values(element).includes(this._myUserID))
                this._setLike();
        })
    }

    removeCard() {
        this._cardTemplate.remove();
        this._cardTemplate = null;
    }

    _setEventListeners() {
        this._elementTrash.addEventListener('click', (evt) => {
            this._handleTrashClick(evt);
        });
        this._cardTemplateImage.addEventListener('click', () => {
            this._handleCardClick(this._data);
        });
        this._likeButton.addEventListener('click', (evt) => {
            if (this._likeButton.classList.contains('element__heart_active')) {
                this._handleDeleteLike(evt);
                this._deleteLike();
            } else {
                this._handleSetLike(evt);
                this._setLike();
            }
        });

    };
};