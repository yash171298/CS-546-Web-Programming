const express = require('express');
const router = express.Router();
const data = require('../data');
const bookdata = data.books;

router.get('/:id', async (req, res) => {
    try {
      let book = await bookdata.get(req.params.id);
      res.status(200).json(book);
    } catch (e) {
      res.status(404).json({ error: 'Review not found' });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      let booklist = await bookdata.getAllbooks();
      res.status(200).json(booklist);
    } catch (e) {
      res.status(404).json({error: e});
    }
});

router.post('/', async (req, res) => {
  const blogBookData = req.body;
  try {
    const {title, author, genre, datePublished, summary } = blogBookData;
    const newBook = await bookdata.create (title, author, genre, datePublished, summary);
    res.status(200).json(newBook);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

    router.put('/:id', async (req, res) => {
        let bookInfo = req.body;
      
        if (!bookInfo) {
          res.status(400).json({ error: 'You must provide data to update a book' });
          return;
        }

        try {
            await bookdata.get(req.params.id);
          } catch (e) {
            res.status(404).json({ error: 'book not found' });
            return;
          }
          try {
            const updatedbook = await bookdata.updatebooks(req.params.id, bookInfo);
            res.status(200).json(updatedbook);
          } catch (e) {
            res.status(400).json({error: e});
          }
  });
  router.patch('/:id', async (req, res) => {
    const requestBody = req.body;
    console.log(requestBody);
    let updatedObject = {};
    updatedObject = await bookdata.get(req.params.id);
    try {
      const oldPost = await bookdata.get(req.params.id);
      if (requestBody.title && requestBody.title !== oldPost.title)
       updatedObject.title = requestBody.title;
      if (requestBody.author && requestBody.author !== oldPost.author && typeof requestBody.author == 'object') 
         updatedObject.author = requestBody.author;
         else{
           throw 'author not an object'
         }
      if (requestBody.genre && requestBody.genre !== oldPost.genre)
         updatedObject.genre = requestBody.genre;
       if (requestBody.datePublished && requestBody.datePublished !== oldPost.datePublished)
        updatedObject.datePublished = requestBody.datePublished;
        if (requestBody.summary && requestBody.summary !== oldPost.summary)
        updatedObject.summary = requestBody.summary; 
        if (requestBody.reviews && requestBody.reviews !== oldPost.reviews)
        updatedObject.reviews = requestBody.reviews; 
    } catch (e) {
      res.status(404).json({ error: 'Provided inputs are incorrect' });
      return;
    }
    if (Object.keys(requestBody).length !== 0) {
      try {
        const updatedbook = await bookdata.updatebooks(
          req.params.id,
          updatedObject
        );
        console.log(updatedbook)
        res.status(200).json(updatedbook);
      } catch (e) {
        res.status(404).json({ error: e });
      }
    } else {
      res.status(404).json({
        error:
          'No fields have been changed from their inital values, so no update has occurred'
      });
    }
  });
  router.delete('/:id', async (req, res) => {
    if (!req.params.id) throw 'You must specify an ID to delete';
    try {
      await bookdata.get(req.params.id);
    } catch (e) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
  
    try {
     const deleted = await bookdata.removebook(req.params.id);
      res.status(200).json(deleted);
    } catch (e) {
      res.status(404).json({error: e});
    }
  });
  module.exports = router;