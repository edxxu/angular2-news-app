import {Component} from 'angular2/core';

@Component({
    selector: 'head-boot',
    template: `

        <div class="header col-md-12 col-sm-12 col-xs-12 col-lg-12">
            <h1> News Feed </h1>
        </div>
    `,
    styles: [`
        .header {
            background-image: linear-gradient(45deg, #00A8C5, #FFFF7E);
            height: 200px;
            position: absolute;
            text-align: center;
            top: 0px;Он г
            float: left;
            left: 0px;
            margin: 0;
            padding: 0;
        }
        h1 {
        font-size: 550%;
        margin-top: 50px;
        }
    `]
})

export class HeadComponent {
}