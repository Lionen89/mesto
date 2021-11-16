// обьявдляем переменные
const edit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const oldName = document.querySelector('.profile__name');
const oldJob = document.querySelector('.profile__description');
const formEdit = popupEdit.querySelector('.popup__form');
const formAdd = popupAdd.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__text[name="name"]');
const jobInput = document.querySelector('.popup__text[name="description"]');
const addButton = document.querySelector('.profile__add-button');
const elementTemplate = document.querySelector('.element-template');
const elementsPlace = document.querySelector('.elements');
const closeEdit = popupEdit.querySelector('.popup__close-button');
const closeAdd = popupAdd.querySelector('.popup__close-button');
const like = document.querySelector('.element__heart');

// фукция открытия редактора профиля

function openEditPopup() {
    nameInput.value = oldName.textContent;
    jobInput.value = oldJob.textContent;
    popupEdit.classList.add('popup_opened');
}
edit.addEventListener('click', openEditPopup);

// фукция закрытия редактора профиля

function closeEditPopup() {
    popupEdit.classList.remove('popup_opened');
}

closeEdit.addEventListener('click', closeEditPopup);

// функция сохранения данных в редакторе профиля

function formSubmitHandler(evt) {
    evt.preventDefault();
    const newName = nameInput.value;
    const newJob = jobInput.value;
    oldName.textContent = newName;
    oldJob.textContent = newJob;
    closeEditPopup();
}

formEdit.addEventListener('submit', formSubmitHandler);


// задаем 6 карточек 
const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
// вставляем на траницу 6 карточек при загрузке страницы

initialCards.forEach((item) => {
    createCards(item.name, item.link)
});

function createCards(name, link) {
    const userElement = elementTemplate.content.querySelector('.element').cloneNode(true);
    userElement.querySelector('.element__image').src = link;
    userElement.querySelector('.element__image').alt = name;
    userElement.querySelector('.element__description > .element__title').textContent = name;
    userElement.querySelector('.element__heart').addEventListener('click', function (event) {
        likeButton(event);
    });
    elementsPlace.prepend(userElement);
}

// фукция открытия добавления карточек

function openAddPopup() {
    formAdd.querySelector('.popup__text[name="name"]').value = '';
    const cardLink = formAdd.querySelector('.popup__text[name="link"]').value = '';
    popupAdd.classList.add('popup_opened');
}
addButton.addEventListener('click', openAddPopup);

// фукция закрытия добавления карточек

function closeAddPopup() {
    popupAdd.classList.remove('popup_opened');
};
closeAdd.addEventListener('click', closeAddPopup);
// функция сохранения карточек

function addCards(evt) {
    evt.preventDefault();
    const cardName = formAdd.querySelector('.popup__text[name="name"]').value;
    const cardLink = formAdd.querySelector('.popup__text[name="link"]').value;
    createCards(cardName, cardLink);
    closeAddPopup();
};
formAdd.addEventListener('submit', addCards);

// фукция для лайков

function likeButton(event) {
    event.target.classList.toggle('element__heart_active');
};