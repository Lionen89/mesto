let edit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let oldName = document.querySelector('.profile__name');
let oldJob = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__text[name="name"]');
let jobInput = document.querySelector('.popup__text[name="description"]');
const elementTemplate = document.querySelector('.element-template');
const elementsPlace= document.querySelector('.elements');

function openPopup() {
    nameInput.value = oldName.textContent;
    jobInput.value = oldJob.textContent;
    popup.classList.add('popup_opened');
}
edit.addEventListener('click', openPopup);

let close = document.querySelector('.popup__close-button');

function closePopup() {
    popup.classList.remove('popup_opened');
}

close.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();

    let newName = nameInput.value;
    let newJob = jobInput.value;
    oldName.textContent = newName;
    oldJob.textContent = newJob;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

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
// вставляем на траницу 6 карточек

initialCards.forEach((item) => {
    createCards(item.name, item.link)

});

function createCards(name, link) {
    const userElement = elementTemplate.content.querySelector('.element').cloneNode(true);
    userElement.querySelector('.element__image').src = link;
    userElement.querySelector('.element__image').alt = name;
    userElement.querySelector('.element__description > .element__title').textContent = name;
    elementsPlace.append(userElement);
}