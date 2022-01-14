export default class UserInfo {
    constructor(userNameSelector, userDescriptionSelector) {
        this._userName = document.querySelector(userNameSelector),
        this._userDescription = document.querySelector(userDescriptionSelector)
    };
    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            description: this._userDescription.textContent
        };
        return userInfo;
    };

    setUserInfo(data) {
        this._userName.innerText = data.name;
        this._userDescription.innerText = data.description;
    };
}