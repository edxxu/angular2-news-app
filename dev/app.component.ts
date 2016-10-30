import {Component} from 'angular2/core';
import {NewsListComponent} from './news-list.component';
import {HeadComponent} from './head.component';

@Component({
    selector: 'my-app',
    template: `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <head-boot></head-boot>
        <news-list></news-list>
    `,
    directives: [NewsListComponent, HeadComponent]
})
export class AppComponent {

}