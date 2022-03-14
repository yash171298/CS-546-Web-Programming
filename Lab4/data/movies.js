const mongoCollections = require('../config/mongoCollections');

const mongocall = require("mongodb");
const movies = mongoCollections.movies;

module.exports = {
  // This is a fun new syntax that was brought forth in ES6, where we can define
  // methods on an object with this shorthand!
  
  
  async create(title, plot, rating, runtime, genre, cast, info, rate)
  {
    // const movies = mongoCollections.movies;

    // const dogCollection = await dogs();
    const moviesCollection = await movies();

    if (!title) throw 'You must provide a title for the movie';
    if (!plot) throw 'You must provide a plot for the movie';
    if (!rating) throw 'You must provide ratings for the movie';
    if (!runtime) throw 'You must provide runtime for the movie';
    if (!genre) throw 'You must provide genre for the movie';
    if (!cast) throw 'You must provide cast for the movie';
    if (!info) throw 'You must provide info for the movie';
    if (typeof title != 'string') throw 'No inputs provided or the title is not a string';
    if (title == ' ') throw 'No inputs provided or the title is not a string';
    if (typeof plot != 'string') throw 'No inputs provided or the plot is not a string';
    if (plot == ' ') throw 'No inputs provided or the plot is not a string';
    if (typeof rating != 'string') throw 'No inputs provided or the rating is not a string';
    if (rating == ' ') throw 'No inputs provided or the rating is not a string';
    if (typeof runtime != 'string') throw 'No inputs provided or the runtime is not a string';
    if (runtime == ' ') throw 'No inputs provided or the runtime is not a string';
    if (!Array.isArray(cast)) throw 'No inputs provided or the cast is not an array';
    for(let i=0; i < cast.length; i++){
      if(typeof cast[i] != 'string') throw 'The values of cast are not a string';
      if(cast[i] == ' ') throw 'The values of cast are not a string';
    }
    if (!info.director) throw 'Not a proper input or not a string';
    if (!info.yearReleased) throw 'Not a proper input or not a string';
    if (typeof info.director != 'string') throw 'Not a proper input or not a string';
    if (info.director == ' ') throw 'Not a proper input or not a string spaces';
    if (typeof info.yearReleased != 'number') throw 'Not a proper input or not a string';
    if (info.yearReleased.toString().length != 4) throw 'Not a proper year provided';
    if (info.yearReleased < 1930 || info.yearReleased > 2026) throw 'Not a proper input or not a string';
    let newmovies = {
       title: title,
       plot: plot,
       rating: rating,
      runtime: runtime,
      genre: genre,
      cast: cast,
      info: info,
      rate: rate
        };


        const insertInfo = await moviesCollection.insertOne(newmovies);
        if (insertInfo.insertedCount === 0) throw 'Could not add movie';
    
        const newId = insertInfo.insertedId;
    
        const movie = await this.get(newId.toString());
        return movie;
    },
    async get(id) {
        if (!id) throw "You must provide an id to search for"
        if (typeof id != 'string') throw 'Id is not a String.';
        
        const moviesCollection = await movies();
        const result = await moviesCollection.findOne({ _id: mongocall.ObjectID(id) }); 
        if (result === null) throw `No movies with that id : ${id}`;
        result._id = result._id.toString();
        
        //if (result === null) throw "No movies with that id";
    
        return result;
    },
        async getAll(){
            const moviesCollection = await movies();

            const moviesList = await moviesCollection.find({}).toArray();
            for(let i = 0; i< moviesList.length; i++){
              moviesList[i]._id = moviesList[i]._id.toString();
            }
            return moviesList;

    },
    async remove(id)  {
        if (!id) throw 'Id not found or is not provided';
        if (typeof id != 'string') throw 'Id is not a String.';
        const moviesCollection = await movies();
        const gettitle = await this.get(id);
        
        const deletionInfo = await moviesCollection.deleteOne({ _id: mongocall.ObjectID(id) });
        
        
        //if (typeof id != 'object') throw 'Id is not an object';
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete movies with id of ${id}`;
        }
        return  `${gettitle.title} has been successfully deleted`;
      },
      async rename(id, newTitle) {
        
        if (!id) throw 'Id not found or is not provided';

        if (typeof id != 'string') throw 'Id is not a String.';
        if (!newTitle) throw 'You must provide a name for your dog';
        
        if (typeof newTitle != 'string') throw 'newtitle is not a String';
        if (newTitle == ' ') throw 'Not a proper input or title not provided';

        const moviesCollection = await movies();
        const rename = {
          title:  newTitle,
          
        };
    
        const updatedInfo = await moviesCollection.updateOne(
          { _id: mongocall.ObjectID(id) },
          { $set: rename }
        );
        //updatedInfo._id = updatedInfo._id.toString();
        //if (typeof id != 'object') throw 'Id is not an object';
        if (updatedInfo.modifiedCount === 0) {
          throw 'could not update movies successfully';
        }
    
        return await this.get(id);
      }
 };