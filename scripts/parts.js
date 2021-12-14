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
document.addEventListener('keydown', closePopupByEsc);
document.addEventListener("click", closePopupByOverlay);
};
export {initialCards as data, openPopup};