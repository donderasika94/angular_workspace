
export class Author{
    firstName:string;
    lastName:string;
}

export class Book{
    bookId:number;
    imageUrl:string;
    title:string;
    author:Author[];
    category:string;
    publisher:string;
    noOfOages:number;
    rating:number;
    edition:number;
    price:number;
    releaseDate:Date;
}