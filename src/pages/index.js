// импортируем данные
import Card from '../components/Card.js';
import {
    formAdd,
    formEdit,
    formAvatar,
    nameInput,
    jobInput,
    elementTemplate,
    objConfig,
    url,
    headers
} from '../utils/Constants.js'
import Api from '../components/API.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithYes from '../components/PopupWithYes.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

const api = new Api(url, headers);

let myUserID = null;

const prfUserInfo = new UserInfo('.profile__name', '.profile__description', '.profile__avatar');
api.getProfileData()
    .then((data) => {
            myUserID = data._id;
            prfUserInfo.setUserInfo(data);
            prfUserInfo.setUserAvatar(data);
            const editProfilePopup = new PopupWithForm('.popup_edit', (newData) => {
                api.editProfile(newData)
                    .then((res) => {
                        prfUserInfo.setUserInfo(res);
                        editProfilePopup.close();
                    })
                    .catch((err) => allert(`Ошибка: ${err.status}`))

            });
            editProfilePopup.setEventListeners();
            document.querySelector('.profile__edit-button').addEventListener('click', () => {
                api.getProfileData()
                    .then((data) => {
                        editFormValidator.clearErrors();
                        editFormValidator.disableButton();
                        nameInput.value = data.name;
                        jobInput.value = data.about;
                        editProfilePopup.open()
                    })
            });
        }

    )

const imagePopup = new PopupWithImage('.popup_photo')
imagePopup.setEventListeners();
const confirmationPopup = new PopupWithYes('.popup_confirmation', (id) => api.deleteCard(id)
    .then((res) => {
        document.getElementById(id).remove()
    }))
confirmationPopup.setEventListeners();

const popupAvatarEdit = new PopupWithForm('.popup_update-avatar', (newAvatarURL)=> {
    api.setNewAvatar(newAvatarURL)
    .then((res) => {
        prfUserInfo.setUserAvatar(res),
        popupAvatarEdit.close()
    })
})
popupAvatarEdit.setEventListeners();
document.querySelector('.profile__avatar-container').addEventListener('click', () =>
    popupAvatarEdit.open()
);

const createCard = function (data, template) {
    const card = new Card(data, template, myUserID, handleCardClick, handleTrashClick, handleSetLike, handleDeleteLike);
    return card.createCards();
};

function handleCardClick(data) {
    imagePopup.open(data);
};

function handleTrashClick(evt) {
    confirmationPopup.open(evt.target.parentNode.getAttribute('id'));
};

function handleSetLike(evt) {
    const amount = evt.target.nextElementSibling
    const id = evt.target.parentNode.parentNode.parentNode.getAttribute('id')
    api.setLike(id)
        .then((res) => {
                amount.textContent = res.likes.length
        });
};

function handleDeleteLike(evt) {
    api.deleteLike(evt.target.parentNode.parentNode.parentNode.getAttribute('id'))
    .then((res) => {
        evt.target.nextElementSibling.textContent = res.likes.length
    });
}

let photo = null;
api.getInitialCards()
    .then(data => {
        photo = new Section({
            items: data,
            renderer: (item) => createCard(item, elementTemplate)
        }, '.elements');
        photo.renderItem();
    })

// Валидация формы редактирования профиля
const editFormValidator = new FormValidator(objConfig, formEdit)
editFormValidator.enableValidation();
// Валидация формы добавления карточки
const addFormValidator = new FormValidator(objConfig, formAdd)
addFormValidator.enableValidation();
// Валидация формы изменения аватара
const avatarFormValidator = new FormValidator(objConfig, formAvatar)
avatarFormValidator.enableValidation();

const addPhotoPopup = new PopupWithForm('.popup_add', () => {
    const inputValues = addPhotoPopup.getInputValues();
    api.addNewCard(inputValues)
        .then((res) => {
            photo.addItem(res);
        })
        .then(() => {
            addPhotoPopup.close();
        })
});

document.querySelector('.profile__add-button').addEventListener('click', () => {
    addFormValidator.clearErrors();
    addFormValidator.disableButton();
    addPhotoPopup.open();
});
addPhotoPopup.setEventListeners();


