export default class Api {
    constructor(url, headers) {
        this._url = url,
        this._headers = headers
    }; 

    _checkResults(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    getProfileData(){
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        })
        .then(this._checkResults)
        .catch((err) => {
            console.log(err)
        })
    };

    editProfile(data) {
        return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    about: data.description
                }),
            })
            .then(this._checkResults)
            .catch((err) => {
                console.log(err)
            })
    };

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
                method: 'GET',
                headers: this._headers
            })
            .then(this._checkResults)
            .catch((err) => {
                console.log(err)
            })
            };

    addNewCard(newCard) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link
        })
    })
        .then(this._checkResults)
        .catch((err) => {
            console.log(err)
        })
    };

    deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResults)
        .catch((err) => {
            console.log(err)
        })
    };

    setLike(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._checkResults)
        .catch((err) => {
            console.log(err)
        })
    }

    deleteLike(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResults)
        .catch((err) => {
            console.log(err)
        })
    }
     setNewAvatar(newAvatarURL){
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(
                newAvatarURL
            ),
        })
        .then(this._checkResults)
        .catch((err) => {
            console.log(err)
        })
     }

}
