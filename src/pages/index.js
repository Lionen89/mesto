// импортируем данные
import Card from '../components/Card.js';
import {
    formAdd,
    formEdit,
    nameInput,
    jobInput,
    elementTemplate,
    objConfig,
    initialCards
} from '../utils/Constants.js'
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

const popupImage = new PopupWithImage('.popup_photo')
popupImage.setEventListeners();

const createCard = function (data, template) {
    const card = new Card(data, template, handleCardClick);
    return card.createCards();

};

function handleCardClick(data) {
    popupImage.open(data)
};

const photo = new Section({
    items: initialCards,
    renderer: (item) =>
        createCard(item, elementTemplate)
}, '.elements');
photo.renderItem();


// Валидация формы редактирования профиля
const editFormValidator = new FormValidator(objConfig, formEdit)
editFormValidator.enableValidation();
// Валидация формы добавления карточки
const addFormValidator = new FormValidator(objConfig, formAdd)
addFormValidator.enableValidation();

const addPhotoPopup = new PopupWithForm('.popup_add', () => {
    const inputValues = addPhotoPopup.getInputValues();
    photo.addItem(inputValues);
    addPhotoPopup.close();
});

document.querySelector('.profile__add-button').addEventListener('click', () => {
    addFormValidator.clearErrors();
    addFormValidator.disableButton();
    addPhotoPopup.open();
});
addPhotoPopup.setEventListeners();

const prfUserInfo = new UserInfo('.profile__name', '.profile__description');

const editProfilePopup = new PopupWithForm('.popup_edit', () => {
    prfUserInfo.setUserInfo(editProfilePopup.getInputValues());
    editProfilePopup.close();
});

document.querySelector('.profile__edit-button').addEventListener('click', () => {
    editFormValidator.clearErrors();
    editFormValidator.disableButton();
    const oldData = prfUserInfo.getUserInfo();
    nameInput.value = oldData.name;
    jobInput.value = oldData.description;
    editProfilePopup.open()
});
editProfilePopup.setEventListeners();
