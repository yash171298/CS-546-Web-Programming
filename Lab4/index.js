const connection = require('./config/mongoConnection');
const movies = require('./data/movies');


const main = async () => {
      let billAndTed={};
      let imitationgame={};
      let avengersi={};
      //q1
      try{
      billAndTed = await movies.create("Bill and Ted Face the Music","Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.","PG-13", "1hr 31min","Comedy",["Keanu Reeves","Alex Winter"],{director: "Dean Parisot", yearReleased: 2020});
      console.log(billAndTed);

     
      }catch(e){
        console.log(e)
      }
      //q2
      // try{
      //   const billAnTed = await movies.get(billAndTed._id);
      //  console.log(billAnTed);
      // }catch(e){
      //   console.log(e)
      // }
      //q3
       try{
        imitationgame = await movies.create("The Imitation Game","Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War.","PG-13", "1hr 54min","Drama",["Benedict Cumberbatch","Keira Knightley"],{director: "Morten Tyldum", yearReleased: 2014},5)
        
       }catch(e){
         console.log(e);
       }
       //q4
       try{
        const allMovies = await movies.getAll();
         console.log(allMovies);
         }catch(e){
           console.log(e)
         }
         //q5
         try{
          avengersi = await movies.create("Avengers: Infinity War","As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.","PG-13", "2hr 29min","Action",["Robert Downey Jr.","Chris Hemsworth"],{director: "Anthony Russo", yearReleased: 2018}, 5);
         console.log(avengersi);
         }catch(e){
           console.log(e)
         }
         //q7
      //  try{
      //   const renamedBillAndTed = await movies.rename(billAndTed._id, "Patrick and Ted Face the Music");
      //   console.log(renamedBillAndTed);
      //  }
      //  catch(e){
      //    console.log(e)
      //  }
      //  //q9
      //  try{
      //     const removeBillAndTed = await movies.remove(imitationgame._id);
      //    console.log(removeBillAndTed);
      //  }catch(e){
      //    console.log(e)
      //  }
      //  //q10
      //  try{
      // const allMovies = await movies.getAll();
      //  console.log(allMovies);
      //  }catch(e){
      //    console.log(e)
      //  }
      


       
     

      //   //11
      // try{
      //   const avengerswar = await movies.create("Avengers: Infinity War","As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.","PG-13", "2hr 29min","Action",["Robert Downey Jr.","Chris Hemsworth"],{director: "Anthony Russo", yearReleased: 201});
      //   console.log(avengerswar);
      // }
      // catch(e){
      //   console.log(e);
      // }
      // //12
      // try{
      //   const removeavengerswar = await movies.remove('507f1f77bcf86cd799439011');
      //   console.log(removeavengerswar);
      // }
      // catch(e){
      //     console.log(e)
      // }
      // //13
      // try{
      //   const renamemovie22 = await movies.rename('507f1f77bcf86cd799439011', "Patrick and Ted Face the Music");
      //   console.log(renamemovie22);
      // }
      // catch(e){
      //     console.log(e);
      // }
      // //14
      // try{
      //   const renamemovie22 = await movies.rename('603f21a7a7f14721b849e424', ' ');
      //   console.log(renamemovie22);
      // }
      // catch(e){
      //   console.log(e);
      // }
      // //15
      // try{
      //    const billAnTed = await movies.get('603f21a7a7f14721b849e424');
      //  console.log(billAnTed);
      // }
      // catch(e){
      //   console.log(e);
      // }
      

  const db = await connection();
  await db.serverConfig.close();

  console.log('Done!'); 
};

    
  
main().catch((error) => {
  console.log(error);
});
