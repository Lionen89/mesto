let edit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let oldName = document.querySelector('.profile__name');
let oldJob = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__text[name="name"]');
let jobInput = document.querySelector('.popup__text[name="description"]');

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
