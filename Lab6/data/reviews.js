const mongoCollections = require('../config/mongoCollections');
const bookscollection = mongoCollections.books;
const {ObjectID, ObjectId}=require("mongodb")
const books = require('./books');
const { reviews } = require('.');
//const mongocall = require("mongodb");
module.exports = {
    async create(bookId,title, reviewer, rating, dateOfReview, review) {
          if(!bookId) throw 'Not a proper input provided';
          if(!title) throw 'Not a proper input provided';
          if(!rating) throw 'Not a proper input provided';
          if(!dateOfReview) throw 'Not a proper input provided';
          if(!review) throw 'Not a proper input provided';
          if(typeof rating != 'number') throw 'rating is should be a number';
          if(rating > 5 || rating < 1) throw 'Rating is not proper input';
         if (typeof title !== 'string') throw 'title must be of string format';
         if (typeof reviewer !== 'string') throw 'content must be of string format';
         if (typeof dateOfReview !== 'string') throw 'content must be of string format';
         if (typeof review !== 'string') throw 'content must be of string format';
         function isvalidDate(d){
          return !isNaN((new Date(d)).getTime())                                                  //reference stackoverflow
        }
        if (!isvalidDate(dateOfReview)) throw 'Not a proper date';
        const reviewsCollection = await bookscollection();
    
        const bookThatPosted = await books.get(bookId);
    
        const newPost = {
          _id: ObjectID(),
          title: title,
          reviewer: reviewer,
          rating: rating,
          dateOfReview: dateOfReview,
          review: review
          
        };

        const bookData= await bookscollection()
    
        const newInsertInformation = await bookData.updateOne({_id:ObjectID(bookId)},{$addToSet:{reviews:newPost}});
       //console.log(typeof bookId);
        //books.addreviewsTobook(bookId ,newInsertInformation)
        // const insertInfo = await reviewsCollection.insertOne(newInsertInformation);
        //  if (insertInfo.insertedCount === 0) throw 'Could not add movie';
    
        //  const newId = insertInfo.insertedId;
    
        //  const book = await this.get(newId.toString());
        return await this.get(bookId);
        //return 
        //bookThatPosted.reviews.push(newInsertInformation);
        
      },


   
    async get(id) {
        if (!id) throw "You must provide an id to search for"
        if (typeof id != 'string') throw 'Id is not a String.';
        
        const reviewsCollection = await bookscollection();
        const result = await reviewsCollection.findOne({ _id: ObjectID.ObjectID(id) }); 
        if (result === null) throw `No books with that id : ${id}`;
        result._id = result._id.toString();
        
        //if (result === null) throw `No books with that id: ${id}`;
    
        return result.reviews;
    },
    async getreviewbyid(id) {
      if (!id) throw "You must provide an id to search for"
        if (typeof id != 'string') throw 'Id is not a String.';
        
        const reviewsCollection = await bookscollection();
        const result = await reviewsCollection.findOne({ "reviews._id": ObjectID(id)}); 
        if (result === null) throw `No movies with that id : ${id}`;
        //result._id = result._id.toString();
        //const filter = await result.findOne({"reviews._id": ObjectID(id)});
        for(let i=0; i< (result.reviews).length; i++){
          if(result.reviews[i]._id.toString() == id){  filter = result.reviews[i]}
        }
        if (filter === null) throw "No movies with that id";
        
        return filter;
      //const result = await reviewsCollection.find({ "reviews._id": ObjectID(id)} ).toArray(); 
     
    },
    async removereview(id) {
      if (!id) throw "You must provide an id to search for"
      if (typeof id != 'string') throw 'Id is not a String.';
      
      const reviewsCollection = await bookscollection();
      const result = await reviewsCollection.findOne({ "reviews._id": ObjectID(id)}); 
      if (result === null) throw `No movies with that id : ${id}`;
      let x = 0;
      x = result._id;
      x = x.toString();
      const deletereview = await this.getreviewbyid(id)
      const updateInfo = await reviewsCollection.updateOne({ _id: ObjectID.ObjectID(x) },{ $pull: { reviews: { _id : ObjectID(id) } } });
      
      
      if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
        throw 'Update failed';
        //return '{"reviewId": ' + id.toString() +"," +'"deleted": ' +true +'}'  + '.' ;
        return {'reviwedId': id.toString(), "deleted" : true}
    
      }
}

