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

const addPhoto = new PopupWithForm('.popup_add', () => {
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

const editProfile = new PopupWithForm('.popup_edit', () => {
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
