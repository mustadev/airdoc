export class Review {
    content:string;
    likes:number;
    dislikes:number;
    author:string;
    constructor(content:string, likes:number, dislikes:number, author:string){
        this.content = content;
        this.likes = likes;
        this.dislikes = dislikes;
        this.author = author;
    };
}