const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPostById, updatePost, deletePost, markAsRead, getReadPosts } = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/read', auth, markAsRead);
router.get('/user/:id/read-posts', auth, getReadPosts);

module.exports = router;
