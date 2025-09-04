export type Book={
   _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: string; 
  updatedAt: string;
}

export type Borrow ={
  book:{
  title:string,
  isbn:string,
  }
  totalQuantity:number
}