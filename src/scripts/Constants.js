const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const formEdit = popupEdit.querySelector('.popup__form');
const formAdd = popupAdd.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__text[name="name"]');
const jobInput = document.querySelector('.popup__text[name="description"]');
const elementTemplate = document.querySelector('.element-template');
const elementsPlace = document.querySelector('.elements');
const popupPhoto = document.querySelector('.popup_photo');
const sochi = new URL('../images/Sochi.jpeg', import.meta.url);
const krasnodar = new URL('../images/krasnodar___shutterstock_1416491849.gujmyhwjakf6.jpg', import.meta.url);
const tuapse = new URL('../images/Tuapse.jpeg', import.meta.url);
const essentuki = new URL('../images/Essentuki.-Fontanyi-u-vhoda-v-Kurortnyiy-park5.jpg', import.meta.url);
const kislovodsk = new URL('../images/Kislovodsk.jpeg', import.meta.url);
const pyatigorsk = new URL('../images/Pyatigorsk.jpeg', import.meta.url);

// задаем обьект настроек
const objConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
// задаем 6 карточек 
const initialCards = [{
        name: 'Сочи',
        link: sochi
    },
    {
        name: 'Краснодар',
        link: krasnodar
    },
    {
        name: 'Туапсе',
        link: tuapse
    },
    {
        name: 'Ессентуки',
        link: essentuki
    },
    {
        name: 'Кисловодск',
        link: kislovodsk
    },
    {
        name: 'Пятигорск',
        link: pyatigorsk
    }
];
export {
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
};