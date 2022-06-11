const express = require('express');


const { createPost, likeAndUnlikePost, deletePost, getPostOfFollowing, updateCaption, commentOnPost, deleteComment } = require('../controllers/post');
const { isAuthenticated } = require('../middlewares/auth');


const router = express.Router();
//up len
router
    .route('/post/upload/')
    .post( isAuthenticated, createPost);
//like and unlike
router
    .route("/post/:id")
    .get(isAuthenticated, likeAndUnlikePost);
//like, unlike, delete post
router
    .route("/post/:id")
    .get(isAuthenticated, likeAndUnlikePost)
    .put(isAuthenticated, updateCaption)
    .delete(isAuthenticated, deletePost);
//xem bai post cung ng dang follow
router
    .route("/posts")
    .get(isAuthenticated, getPostOfFollowing);
//comment then sua xoa
router
    .route("/post/comment/:id")
    .put(isAuthenticated, commentOnPost)
    .delete(isAuthenticated, deleteComment);
module.exports = router;