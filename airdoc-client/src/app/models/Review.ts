export class Review {
    content:string;
    likes:number;
    rating:number;
    dislikes:number;
    authorId:string;
    
    constructor(content:string, likes:number, dislikes:number, authorId:string){
        this.content = content;
        this.likes = likes;
        this.dislikes = dislikes;
        this.authorId = authorId;
    };
}