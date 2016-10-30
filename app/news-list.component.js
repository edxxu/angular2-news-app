System.register(['angular2/core', './news.service', './source', './article'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, news_service_1, source_1, article_1;
    var NewsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            },
            function (source_1_1) {
                source_1 = source_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            NewsListComponent = (function () {
                function NewsListComponent(newsService) {
                    this.newsService = newsService;
                    this.source = "Select Source";
                    this.arts = [];
                    this.sources = [
                        new source_1.Source('BBC News', 'bbc-news'),
                        new source_1.Source("Bloomberg", 'bloomberg'),
                        new source_1.Source("BuzzFeed", 'buzzfeed'),
                        new source_1.Source("Ars technica", 'ars-technica')
                    ];
                    this.exRatesBool = false;
                    this.strRates = "";
                    this.newsService = newsService;
                }
                NewsListComponent.prototype.onClick = function (source) {
                    var _this = this;
                    this.newsService.getArticles(source.name).subscribe(function (data) { return _this.articles = data; });
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
                        this.arts[i] = new article_1.Article(title, description, url, author, image);
                    }
                };
                NewsListComponent.prototype.rates = function () {
                    var _this = this;
                    this.exRatesBool = true;
                    this.newsService.getExchangeRates().subscribe(function (data) { return _this.exRates = data; });
                    console.log(this.exRates);
                    this.strRates = "1 EUR = " + this.exRates['rates']['RUB'] + "RUB = " + this.exRates['rates']['USD'] + " USD";
                };
                NewsListComponent = __decorate([
                    core_1.Component({
                        selector: 'news-list',
                        template: "\n        <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"col-md-12\">\n        <div class=\"cont\">\n        <h1> {{ source }}</h1>\n        <div class=\"btn-group\">\n        <button *ngFor=\"#source of sources\" class=\"btn btn-primary\" (click)=\"onClick(source)\"> {{source.fullName}} </button>\n        <button class=\"btn btn-default\" (click)=\"rates()\"> Exchange Rates </button>\n        </div>\n        <p *ngIf=\"exRatesBool === true\"> {{ strRates }} </p>\n        <div *ngIf=\"source !== 'Select Source'\" class=\"articles\">\n        {{ arts }}\n        <div class=\"article col-md-12 col-sm-12 col-xs-12 col-lg-12\" *ngFor=\"#art of arts\">\n           <img src=\"{{art.image}}\" class=\"col-md-12 col-sm-12 col-xs-12\">\n           <h1> <a href=\"{{art.url}}\"> {{art.title}} </a> </h1>           <p> {{art.description}} </p>\n        </div>\n        </div>  \n        </div>\n        </div>\n        </div>\n        </div>\n        ",
                        providers: [news_service_1.NewsService],
                        styles: ["\n        .articles {\n            margin-top: 10px;\n        }\n        .cont {\n            margin-top: 200px;\n        }\n        .article {\n            padding: 10px;\n            border-radius: 10px;\n            border: 1px solid #95a5a6;\n            margin-top: 10px;\n            box-shadow: 1px 1px 50px rgba(0, 0, 0, .5);\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [news_service_1.NewsService])
                ], NewsListComponent);
                return NewsListComponent;
            }());
            exports_1("NewsListComponent", NewsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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TyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO2dCQUNqSCxDQUFDO2dCQXRGTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUscTlCQXVCTDt3QkFDTCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3dCQUN4QixNQUFNLEVBQUUsQ0FBQyxnV0FjUixDQUFDO3FCQUNMLENBQUM7O3FDQUFBO2dCQThDRix3QkFBQztZQUFELENBNUNBLEFBNENDLElBQUE7WUE1Q0QsaURBNENDLENBQUEiLCJmaWxlIjoibmV3cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmV3c1NlcnZpY2V9IGZyb20gJy4vbmV3cy5zZXJ2aWNlJztcbmltcG9ydCB7U291cmNlfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQge0FydGljbGV9IGZyb20gJy4vYXJ0aWNsZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmV3cy1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udFwiPlxuICAgICAgICA8aDE+IHt7IHNvdXJjZSB9fTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCIjc291cmNlIG9mIHNvdXJjZXNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkNsaWNrKHNvdXJjZSlcIj4ge3tzb3VyY2UuZnVsbE5hbWV9fSA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJyYXRlcygpXCI+IEV4Y2hhbmdlIFJhdGVzIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgKm5nSWY9XCJleFJhdGVzQm9vbCA9PT0gdHJ1ZVwiPiB7eyBzdHJSYXRlcyB9fSA8L3A+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJzb3VyY2UgIT09ICdTZWxlY3QgU291cmNlJ1wiIGNsYXNzPVwiYXJ0aWNsZXNcIj5cbiAgICAgICAge3sgYXJ0cyB9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZSBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMiBjb2wtbGctMTJcIiAqbmdGb3I9XCIjYXJ0IG9mIGFydHNcIj5cbiAgICAgICAgICAgPGltZyBzcmM9XCJ7e2FydC5pbWFnZX19XCIgY2xhc3M9XCJjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxuICAgICAgICAgICA8aDE+IDxhIGhyZWY9XCJ7e2FydC51cmx9fVwiPiB7e2FydC50aXRsZX19IDwvYT4gPC9oMT5cXFxuICAgICAgICAgICA8cD4ge3thcnQuZGVzY3JpcHRpb259fSA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICBwcm92aWRlcnM6IFtOZXdzU2VydmljZV0sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuYXJ0aWNsZXMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYXJ0aWNsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NWE1YTY7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1MHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZXdzTGlzdENvbXBvbmVudCB7XG5cbiAgICBhcnRpY2xlcztcbiAgICBzb3VyY2UgPSBcIlNlbGVjdCBTb3VyY2VcIjtcbiAgICBhcnRzID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ld3NTZXJ2aWNlOiBOZXdzU2VydmljZSkge1xuICAgICAgICB0aGlzLm5ld3NTZXJ2aWNlID0gbmV3c1NlcnZpY2U7XG4gICAgfVxuXG4gICAgb25DbGljayhzb3VyY2U6U291cmNlKSB7XG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0QXJ0aWNsZXMoc291cmNlLm5hbWUpLnN1YnNjcmliZShkYXRhID0+IHRoaXMuYXJ0aWNsZXMgPSBkYXRhKTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2UuZnVsbE5hbWU7XG4gICAgICAgIHRoaXMuYXJ0aWNsZXMgPSB0aGlzLmFydGljbGVzWydhcnRpY2xlcyddO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFydGljbGVzKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnRzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXV0aG9yID0gdGhpcy5hcnRpY2xlc1tpXVsnYXV0aG9yJ107XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLmFydGljbGVzW2ldWyd0aXRsZSddO1xuICAgICAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5hcnRpY2xlc1tpXVsnZGVzY3JpcHRpb24nXTtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IHRoaXMuYXJ0aWNsZXNbaV1bJ3VybFRvSW1hZ2UnXTtcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLmFydGljbGVzW2ldWyd1cmwnXTtcbiAgICAgICAgICAgIHRoaXMuYXJ0c1tpXSA9IG5ldyBBcnRpY2xlKHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsLCBhdXRob3IsIGltYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZXMgPSBbXG4gICAgICAgIG5ldyBTb3VyY2UoJ0JCQyBOZXdzJywgJ2JiYy1uZXdzJyksXG4gICAgICAgIG5ldyBTb3VyY2UoXCJCbG9vbWJlcmdcIiwgJ2Jsb29tYmVyZycpLFxuICAgICAgICBuZXcgU291cmNlKFwiQnV6ekZlZWRcIiwgJ2J1enpmZWVkJyksXG4gICAgICAgIG5ldyBTb3VyY2UoXCJBcnMgdGVjaG5pY2FcIiwgJ2Fycy10ZWNobmljYScpXG4gICAgXTtcblxuICAgIGV4UmF0ZXM7XG4gICAgZXhSYXRlc0Jvb2wgPSBmYWxzZTtcbiAgICBzdHJSYXRlcyA9IFwiXCI7XG5cbiAgICByYXRlcygpIHtcbiAgICAgICAgdGhpcy5leFJhdGVzQm9vbCA9IHRydWU7XG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0RXhjaGFuZ2VSYXRlcygpLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZXhSYXRlcyA9IGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV4UmF0ZXMpO1xuICAgICAgICB0aGlzLnN0clJhdGVzID0gXCIxIEVVUiA9IFwiICsgdGhpcy5leFJhdGVzWydyYXRlcyddWydSVUInXSArIFwiUlVCID0gXCIgKyB0aGlzLmV4UmF0ZXNbJ3JhdGVzJ11bJ1VTRCddICsgXCIgVVNEXCI7XG4gICAgfVxuXG59XG4iXX0=
