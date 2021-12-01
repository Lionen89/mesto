//import {hideAllError} from '.validate';
// обьявдляем переменные
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupPhoto = document.querySelector('.popup_photo');
const popupList = document.querySelectorAll('.popup');
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
const closePhoto = popupPhoto.querySelector('.popup__close-button');
const like = document.querySelector('.element__heart');
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


const openPopup = (popup) => {
    popup.classList.add('popup_opened');
};
// фукция открытия редактора профиля

function openEditPopup() {
    nameInput.value = oldName.textContent;
    jobInput.value = oldJob.textContent;
    openPopup(popupEdit);
}
editButton.addEventListener('click', openEditPopup);

// ловим событие для закрытия редактора профиля

closeEdit.addEventListener('click', function () {
    closePopup(popupEdit);
});

// функция сохранения данных в редакторе профиля

function formSubmitHandler(evt) {
    evt.preventDefault();
    const newName = nameInput.value;
    const newJob = jobInput.value;
    oldName.textContent = newName;
    oldJob.textContent = newJob;
    closePopup(popupEdit);
}

formEdit.addEventListener('submit', formSubmitHandler);

// вставляем на траницу 6 карточек при загрузке страницы

initialCards.forEach((item) => {
    const newCard = createCard(item.name, item.link);
    elementsPlace.prepend(newCard);
});

function createCard(name, link) {
    const userElement = elementTemplate.content.querySelector('.element').cloneNode(true);
    const userImage = userElement.querySelector('.element__image')
    userImage.src = link;
    userImage.alt = name;
    userElement.querySelector('.element__description > .element__title').textContent = name;
    // ловим событие для лайка
    userElement.querySelector('.element__heart').addEventListener('click', function (event) {
        likeButton(event);
    });
    // фукция удаления карточки
    userElement.querySelector('.element__trash').addEventListener('click', function () {
        userElement.remove();
    });
    // ловим событие для открытия фото
    userImage.addEventListener('click', function () {
        // фукция открытия картики
        popupPhoto.querySelector('.popup__image').src = link;
        popupPhoto.querySelector('.popup__image').alt = name;
        popupPhoto.querySelector('.popup__photo-title').textContent = name;
        openPopup(popupPhoto);
    });
    return userElement;
};
// фукция открытия добавления карточек

function openAddPopup() {
    formAdd.querySelector('.popup__text[name="name"]').value = '';
    const cardLink = formAdd.querySelector('.popup__text[name="link"]').value = '';
    openPopup(popupAdd);
};

addButton.addEventListener('click', openAddPopup);

// фукция закрытия попапов

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    // попопытался удалить ошибки при закрытии но не вышло
    // hideAllError(popup, {
    //     inputErrorClass: 'popup__input_type_error',
    //     errorClass: 'popup__error_visible'
    //   });
};
// ловим событие для закрытия добавления карточек
closeAdd.addEventListener('click', function () {
    closePopup(popupAdd);
});
// функция сохранения карточек

function addCards(evt) {
    evt.preventDefault();
    const cardName = formAdd.querySelector('.popup__text[name="name"]').value;
    const cardLink = formAdd.querySelector('.popup__text[name="link"]').value;
    elementsPlace.prepend(createCard(cardName, cardLink));
    closePopup(popupAdd);
};
formAdd.addEventListener('submit', addCards);

// фукция для лайков

function likeButton(event) {
    event.target.classList.toggle('element__heart_active');
};

// ловим событие для закрытия картинки

closePhoto.addEventListener('click', function () {
    closePopup(popupPhoto);
});
// функция закртия  открытой модалки 
const closeOpenedPopup = () => {
    popupList.forEach((popupElement) => {
        if (popupElement.classList.contains('popup_opened')) {
            closePopup(popupElement);
        }
    });
};


// фукция закрытия попапов по ESC
const closePopupByEsc = () => {
    document.addEventListener('keydown', (evt) => {
        if (evt.key === "Escape") {
            closeOpenedPopup()
        }
    });
};

closePopupByEsc();

// фукция закрытия попапов по клику на оверлей
document.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
        closeOpenedPopup()
    };
});