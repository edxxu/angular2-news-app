export class Article {

    constructor(public title:string, public description:string,
                public url:string, public author:string,
                public image:string) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.author = author;
        this.image = image;
    }

}