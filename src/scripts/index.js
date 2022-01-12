// импортируем данные
import Card from './Card.js';
import {
    popupEdit,
    popupAdd,
    formEdit,
    formAdd,
    nameInput,
    jobInput,
    elementTemplate,
    elementsPlace,
    popupPhoto,
    objConfig,
    initialCards
} from './Constants.js'
import Section from './Section.js';
import FormValidator from './FormValidator.js'
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import '../pages/index.css';

const popupImage = new PopupWithImage(popupPhoto)
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
}, elementsPlace);
photo.renderItem();

const addPhoto = new PopupWithForm(popupAdd, () => {
    const inputValues = addPhoto._getInputValues();
    const newcard = createCard(inputValues, elementTemplate);
    photo.addItem(newcard);
    addPhoto.close();
});

document.querySelector('.profile__add-button').addEventListener('click', () => {
    addFormValidator.clearErrors();
    addPhoto.open();
});
addPhoto.setEventListeners();

const prfUserInfo = new UserInfo(nameInput, jobInput);

const editProfile = new PopupWithForm(popupEdit, () => {
    prfUserInfo.setUserInfo(editProfile._getInputValues());
    editProfile.close();
});

document.querySelector('.profile__edit-button').addEventListener('click', () => {
    editFormValidator.clearErrors();
    const oldData = prfUserInfo.getUserInfo();
    prfUserInfo.setUserInfo(oldData);
    editProfile.open()
});
editProfile.setEventListeners();

// Валидация формы редактирования профиля
const editFormValidator = new FormValidator(objConfig, formEdit)
editFormValidator.enableValidation();
// Валидация формы добавления карточки
const addFormValidator = new FormValidator(objConfig, formAdd)
addFormValidator.enableValidation();