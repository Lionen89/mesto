import {
    Card
} from './Card.js';
import {
    openPopup, closePopup
} from './parts.js'
// import FormValidator from './FormValidator'
// обьявляем переменные
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupPhoto = document.querySelector('.popup_photo');
const oldName = document.querySelector('.profile__name');
const oldJob = document.querySelector('.profile__description');
const formEdit = popupEdit.querySelector('.popup__form');
const formAdd = popupAdd.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__text[name="name"]');
const jobInput = document.querySelector('.popup__text[name="description"]');
const elementTemplate = document.querySelector('.element-template');
const elementsPlace = document.querySelector('.elements');
const closeEdit = popupEdit.querySelector('.popup__close-button');
const closePhoto = popupPhoto.querySelector('.popup__close-button');
const popupAddName = formAdd.querySelector('.popup__text[name="name"]');
const popupAddLink = formAdd.querySelector('.popup__text[name="link"]');
// задаем 6 карточек 
const initialCards = [{
        name: 'Сочи',
        link: './images/Sochi.jpeg'
    },
    {
        name: 'Краснодар',
        link: './images/krasnodar___shutterstock_1416491849.gujmyhwjakf6.jpg'
    },
    {
        name: 'Туапсе',
        link: './images/Tuapse.jpeg'
    },
    {
        name: 'Ессентуки',
        link: './images/Essentuki.-Fontanyi-u-vhoda-v-Kurortnyiy-park5.jpg'
    },
    {
        name: 'Кисловодск',
        link: './images/Kislovodsk.jpeg'
    },
    {
        name: 'Пятигорск',
        link: './images/Pyatigorsk.jpeg'
    }
];

const createCard = function (data, template) {
    const card = new Card(data, template);
    return card.createDefaultCards();
};
const renderCards = function () {
    const newCard = initialCards.forEach((item) => {
        elementsPlace.prepend(createCard(item, elementTemplate));
    });
};
renderCards();

// фукция открытия редактора профиля

function openEditPopup() {
    nameInput.value = oldName.textContent;
    jobInput.value = oldJob.textContent;
    openPopup(popupEdit);
}

// функция сохранения данных в редакторе профиля

function handleFormSubmission(evt) {
    evt.preventDefault();
    const newName = nameInput.value;
    const newJob = jobInput.value;
    oldName.textContent = newName;
    oldJob.textContent = newJob;
    closePopup(popupEdit);
}

function openAddPopup() {
    popupAddName.value = '';
    popupAddLink.value = '';
    openPopup(popupAdd);
};

function setEventListeners() {
    document.querySelector('.profile__add-button').addEventListener('click', openAddPopup);
    popupAdd.querySelector('.popup__close-button').addEventListener('click', function () {
        closePopup(popupAdd);
    });
    formAdd.addEventListener('submit', addCards);
    formEdit.addEventListener('submit', handleFormSubmission);
    document.querySelector('.profile__edit-button').addEventListener('click', openEditPopup);
    closeEdit.addEventListener('click', function () {
        closePopup(popupEdit);
    });
}
setEventListeners();

// функция сохранения карточек

function addCards(evt) {
    evt.preventDefault();
    const cardName = popupAddName.value;
    const cardLink = popupAddLink.value;
    elementsPlace.prepend(createCard(cardName, cardLink));
    closePopup(popupAdd);
};

// ловим событие для закрытия картинки

closePhoto.addEventListener('click', function () {
    closePopup(popupPhoto);
});