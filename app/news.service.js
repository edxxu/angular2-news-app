System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var NewsService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            NewsService = (function () {
                function NewsService(_http) {
                    this._http = _http;
                }
                NewsService.prototype.getArticles = function (source) {
                    return this._http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=49156179bd854a9797cd2edfc7f0b9eb').map(function (res) { return res.json(); });
                };
                NewsService.prototype.getExchangeRates = function () {
                    return this._http.get('http://api.fixer.io/latest').map(function (res) { return res.json(); });
                };
                NewsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NewsService);
                return NewsService;
            }());
            exports_1("NewsService", NewsService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFSSxxQkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO2dCQUUvQixDQUFDO2dCQUVELGlDQUFXLEdBQVgsVUFBWSxNQUFhO29CQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMseUNBQXlDLEdBQUcsTUFBTSxHQUFHLDBDQUEwQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUNsSixDQUFDO2dCQUVELHNDQUFnQixHQUFoQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQy9FLENBQUM7Z0JBYkw7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBZWIsa0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHFDQWNDLENBQUEiLCJmaWxlIjoibmV3cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5ld3NTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcblxuICAgIH1cblxuICAgIGdldEFydGljbGVzKHNvdXJjZTpzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwczovL25ld3NhcGkub3JnL3YxL2FydGljbGVzP3NvdXJjZT0nICsgc291cmNlICsgJyZhcGlLZXk9NDkxNTYxNzliZDg1NGE5Nzk3Y2QyZWRmYzdmMGI5ZWInKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGdldEV4Y2hhbmdlUmF0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2FwaS5maXhlci5pby9sYXRlc3QnKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxufSJdfQ==
