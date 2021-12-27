const express = require('express');
const postsRouter = express.Router();
const Post = require('../models/post');

postsRouter
  .get('/', (req, res) => {
    Post.find({}, (err, posts) => {
      if (err) {
        console.log(err);
        res.status(500).json({ success: false });
      } else {
        res.status(200).json({ success: true, posts: posts });
      }
    });
  })
  .post('/', (req, res) => {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
    });
    newPost.save((err, post) => {
      if (err) {
        console.log(err);
        res.status(400).json({ success: false });
      } else {
        console.log('New post was saved');
        res.status(200).json({ success: true, post: post });
      }
    });
  })
  .put('/:postId', (req, res) => {
    Post.replaceOne({ _id: req.params.postId }, req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).json({ succss: false });
      } else {
        res.status(200).json({ succss: true, result: result });
      }
    });
  })
  .delete('/:postId', (req, res) => {
    Post.deleteOne({ _id: req.params.postId }, (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).json({ success: false });
      } else {
        res.status(200).json({ success: true, result: result });
      }
    });
  });

module.exports = postsRouter;
