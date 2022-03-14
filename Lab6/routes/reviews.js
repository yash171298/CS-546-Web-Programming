const express = require('express');
const router = express.Router();
const data = require('../data');
const reviewData = data.reviews;
const bookData= data.books;

router.get('/:id', async (req, res) => {
    try {
      const review = await reviewData.get(req.params.id);
      res.status(200).json(review);
    } catch (e) {
      res.status(404).json({ error: e });
    }
  });
  router.get('/review/:id', async (req, res) => {
    try {
      const review = await reviewData.getreviewbyid(req.params.id);
      res.status(200).json(review);
    } catch (e) {
      res.status(404).json({ error: e });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const reviewlist = await reviewData.getAllreviews();
      res.status(200).json(reviewlist);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });

  router.post('/:id', async (req, res) => {
    const blogReviewData = req.body;
    let id = 0;
    id = req.params.id;
    if (!blogReviewData.title) {
      res.status(400).json({ error: 'You must provide  review title' });
      return;
    }
    if (!blogReviewData.reviewer) {
      res.status(400).json({ error: 'You must provide review reviewer' });
      return;
    }
    if (!blogReviewData.rating) {
      res.status(400).json({ error: 'You must provide review rating' });
      return;
    }
    if (!blogReviewData.dateOfReview) {
        res.status(400).json({ error: 'You must provide date of review' });
        return;
      }
      if (!blogReviewData.review) {
        res.status(400).json({ error: 'You must provide review' });
        return;
      }  
    try {
      const { title, reviewer, rating, dateOfReview, review } = blogReviewData;
      const newPost = await reviewData.create(id, title, reviewer, rating, dateOfReview, review);

      res.status(200).json(await bookData.get(req.params.id));
    } catch (e) {
      res.status(400).json({ error: e });
    }
  });




  router.delete('/:id', async (req, res) => {
    try {
      await reviewData.getreviewbyid(req.params.id);
    } catch (e) {
      res.status(404).json({error: 'Review with that id not found'});
      return;
    }
    try {
      const deletePost = await reviewData.removereview(req.params.id);
      res.status(200).json(deletePost);
    } catch (e) {
      res.status(404).json({error: e});
    }
  });

  module.exports = router;