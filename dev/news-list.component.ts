import {Component} from 'angular2/core';
import {NewsService} from './news.service';
import {Source} from './source';
import {Article} from './article';

@Component({
    selector: 'news-list',
    template: `
        <div class="container">
        <div class="row">
        <div class="col-md-12">
        <div class="cont">
        <h1> {{ source }}</h1>
        <div class="btn-group">
        <button *ngFor="#source of sources" class="btn btn-primary" (click)="onClick(source)"> {{source.fullName}} </button>
        <button class="btn btn-default" (click)="rates()"> Exchange Rates </button>
        </div>
        <p *ngIf="exRatesBool === true"> {{ strRates }} </p>
        <div *ngIf="source !== 'Select Source'" class="articles">
        {{ arts }}
        <div class="article col-md-12 col-sm-12 col-xs-12 col-lg-12" *ngFor="#art of arts">
           <img src="{{art.image}}" class="col-md-12 col-sm-12 col-xs-12">
           <h1> <a href="{{art.url}}"> {{art.title}} </a> </h1>\
           <p> {{art.description}} </p>
        </div>
        </div>  
        </div>
        </div>
        </div>
        </div>
        `,
    providers: [NewsService],
    styles: [`
        .articles {
            margin-top: 10px;
        }
        .cont {
            margin-top: 200px;
        }
        .article {
            padding: 10px;
            border-radius: 10px;
            border: 1px solid #95a5a6;
            margin-top: 10px;
            box-shadow: 1px 1px 50px rgba(0, 0, 0, .5);
        }
    `]
})

export class NewsListComponent {

    articles;
    source = "Select Source";
    arts = [];

    constructor(private newsService: NewsService) {
        this.newsService = newsService;
    }

    onClick(source:Source) {
        this.newsService.getArticles(source.name).subscribe(data => this.articles = data);
        this.source = source.fullName;
        this.articles = this.articles['articles'];
        console.log(this.articles);
        console.log(this.arts);
        for (var i = 0; i < this.articles.length; i++) {
            var author = this.articles[i]['author'];
            var title = this.articles[i]['title'];
            var description = this.articles[i]['description'];
            var image = this.articles[i]['urlToImage'];
            var url = this.articles[i]['url'];
            this.arts[i] = new Article(title, description, url, author, image);
        }
    }

    sources = [
        new Source('BBC News', 'bbc-news'),
        new Source("Bloomberg", 'bloomberg'),
        new Source("BuzzFeed", 'buzzfeed'),
        new Source("Ars technica", 'ars-technica')
    ];

    exRates;
    exRatesBool = false;
    strRates = "";

    rates() {
        this.exRatesBool = true;
        this.newsService.getExchangeRates().subscribe(data => this.exRates = data);
        console.log(this.exRates);
        this.strRates = "1 EUR = " + this.exRates['rates']['RUB'] + "RUB = " + this.exRates['rates']['USD'] + " USD";
    }

}
