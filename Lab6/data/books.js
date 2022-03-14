const mongoCollections = require('../config/mongoCollections');

const mongocall = require("mongodb");
const books = mongoCollections.books;

module.exports = {
    async create(title, author, genre, datePublished, summary, reviews)
  {
    // const movies = mongoCollections.movies;

    // const dogCollection = await dogs();
    const booksCollection = await books();

     if (!title) throw 'You must provide a title for the movie';
     if (!author) throw 'You must provide a plot for the movie';
     if (!genre) throw 'You must provide ratings for the movie';
     if (!datePublished) throw 'You must provide runtime for the movie';
     if (!summary) throw 'You must provide genre for the movie';
     if ( summary == ' ') throw 'Summary is not a string';
     if (typeof title != 'string') throw 'No inputs provided or the title is not a string';
     if (title == ' ') throw 'No inputs provided or the title is not a string';
      if (typeof author != 'object') throw 'No inputs provided or the plot is not a string';
     if (author == ' ') throw 'No inputs provided or the plot is not a string';

     if (!Array.isArray(genre)) throw 'No inputs provided or the genre is not an array';
     if (genre == ' ') throw 'No inputs provided or the rating is not a string';
     for(let i=0; i < genre.length; i++){
      if(typeof genre[i] != 'string') throw 'The values of genre are not a string';
      if(genre[i] == ' ') throw 'The values of genre are not a string';
    }
      if (typeof datePublished != 'string') throw 'No inputs provided or the runtime is not a string';
     if (datePublished == ' ') throw 'No inputs provided or the runtime is not a string';
     if(typeof summary != 'string') throw 'No inputs provided or the runtime is not a string';
    if (!author.authorFirstName) throw 'Not a proper input or not a string';
     if (!author.authorLastName) throw 'Not a proper input or not a string';
     if (typeof author.authorFirstName != 'string') throw 'Not a proper input or not a string';
     if (author.authorFirstName == ' ') throw 'Not a proper input or not a string spaces';
     if (author.authorLastName == ' ') throw 'Not a proper input or not a string spaces';
     if (typeof author.authorLastName != 'string') throw 'Not a proper input or not a string';
     function isvalidDate(d){
      return !isNaN((new Date(d)).getTime())                                                  //reference stackoverflow
    }
    if (!isvalidDate(datePublished)) throw 'Not a proper date';

    let newbooks = {
        title: title,
        author: author,
        genre: genre,
        datePublished: datePublished,
        summary: summary,
        reviews: []
        };


        const insertInfo = await booksCollection.insertOne(newbooks);
        if (insertInfo.insertedCount === 0) throw 'Could not add movie';
    
        const newId = insertInfo.insertedId;
    
        const book = await this.get(newId.toString());
        return book;
    },
    async get(id) {
        if (!id) throw "You must provide an id to search for";
        if (typeof id != 'string') throw 'Id is not a String.';
        
        const booksCollection = await books();
        const result = await booksCollection.findOne({ _id: mongocall.ObjectID(id) }); 
        if (result === null) throw `No books with that id : ${id}`;
        result._id = result._id.toString();
    
        return result;
    },
    getAllbooks: async () => {
      const booksCollection = await books();
      const bookList = await booksCollection.find({},{ projection: { _id: 1, title: 1 }}).toArray();
      return bookList;
    },

    async updatebooks(id, updatedbook) {
      if (!id) throw "You must provide an id to search for";
      if (!updatedbook) throw "You must provide proper updating data";
      if(!updatedbook.title || typeof updatedbook.title != 'string') throw " not a proper title";
      if(!updatedbook.author || typeof updatedbook.author != 'object') throw "Author is not an object";
      if(!updatedbook.genre) throw "Genre not provided or genre is not an array"
      if (!Array.isArray(updatedbook.genre)) throw "Genre not provided or genre is not an array"
      for(let i=0; i < (updatedbook.genre).length; i++){
        if(typeof updatedbook.genre[i] != 'string') throw 'The values of genre are not a string';
        if(updatedbook.genre[i] == ' ') throw 'The values of genre are not a string';
      }
      if (!updatedbook.author.authorFirstName) throw 'Not a proper input or not a string';
     if (!updatedbook.author.authorLastName) throw 'Not a proper input or not a string';
     if (typeof updatedbook.author.authorFirstName != 'string') throw 'Not a proper input or not a string';
     if (updatedbook.author.authorFirstName == ' ') throw 'Not a proper input or not a string spaces';
     if (updatedbook.author.authorLastName == ' ') throw 'Not a proper input or not a string spaces';
     if (typeof updatedbook.author.authorLastName != 'string') throw 'Not a proper input or not a string';
     function isvalidDate(d){
      return !isNaN((new Date(d)).getTime())                                                  //reference stackoverflow
    }
    if (!isvalidDate(updatedbook.datePublished)) throw 'Not a proper date';
    
      const book = await this.get(id);
      console.log(book);
  
      let bookUpdateInfo = {
        title: updatedbook.title,
        author: updatedbook.author,
        genre: updatedbook.genre,
        datePublished: updatedbook.datePublished,
        summary: updatedbook.summary
      };
  
      const bookCollection = await books();
      const updateInfo = await bookCollection.updateOne(
        { _id: mongocall.ObjectID(id) },
        { $set: bookUpdateInfo }
      );
      if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
        throw 'Update failed';
  
      return await this.get(id);
    },
    async removebook(id) {
      if (!id) throw "You must provide an id to search for";
      const booksCollection = await books();
      const deletionInfo = await booksCollection.removeOne({ _id: mongocall.ObjectID(id) });
      if (deletionInfo.deletedCount === 0) {
        throw `Could not delete book with id of ${id}`;
      }
     return {'reviwedId': id.toString(), "deleted" : true}
    },







    async addreviewsTobook(bookId, reviews) {
      let currentbook = await this.get(bookId);
      console.log(currentbook);
  
      const bookCollection = await books();
      const updateInfo = await bookCollection.updateOne(
        { _id: bookId },
        { $addToSet: { reviews: reviews } }
      );
  
      if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
        throw 'Update failed';
  
      return await this.get(bookId);
    },
    async removereviewFrombook(bookId, reviews) {
      let currentbook = await this.get(bookId);
      console.log(currentbook);
  
      const bookCollection = await books();
      const updateInfo = await bookCollection.updateOne(
        { _id: bookId },
        { $pull: { reviews: reviews } }
      );
      if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
        throw 'Update failed';
  
      return await this.get(bookId);
    }
}