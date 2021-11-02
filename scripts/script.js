let edit = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');

function openPopup() {
    popup.classList.add('popup_opened');
}
edit.addEventListener('click', openPopup);

let close = document.querySelector('.popup__close-button');

function closePopup() {
    popup.classList.remove('popup_opened');
}

close.addEventListener('click', closePopup);

    let formElement = document.querySelector('.popup__form');
    let nameInput = document.querySelector('.popup__text');
    let jobInput = document.querySelector('.popup__text[name="description"]');

function formSubmitHandler(evt) {
    evt.preventDefault();
    
    let newName = nameInput.value;
    let newJob = jobInput.value;
    let oldName = document.querySelector('.profile__name');
    let oldJob = document.querySelector('.profile__description');
    oldName.textContent = newName;
    oldJob.textContent = newJob;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
