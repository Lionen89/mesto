export default class UserInfo {
    constructor(userName, userDescription) {
        this._userName = userName,
            this._userDescription = userDescription
    };
    getUserInfo() {
        const userInfo = {
            name: document.querySelector('.profile__name').textContent,
            description: document.querySelector('.profile__description').textContent
        };
        return userInfo;
    };

    setUserInfo(data) {
        this._userName.value = data.name;
        this._userDescription.value = data.description;
        document.querySelector('.profile__name').textContent = data.name;
        document.querySelector('.profile__description').textContent = data.description;
    };
}