import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';


@Injectable()
export class NewsService {

    constructor(private _http: Http) {

    }

    getArticles(source:string) {
        return this._http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=49156179bd854a9797cd2edfc7f0b9eb').map(res => res.json());
    }

    getExchangeRates() {
        return this._http.get('http://api.fixer.io/latest').map(res => res.json());
    }

}