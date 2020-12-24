export class Api {
    constructor(options) {
        this._url = options.url;
    }

    getAnswer(request) {
        return fetch (`${this._url}${request}&onlyLines=${1}`, {
            method: 'GET'
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        })
    }
}