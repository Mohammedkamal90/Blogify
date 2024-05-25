const Post = require('../models/Post');
const User = require('../models/User');

exports.createPost = async (req, res) => {
    try {
        const { title, content, headerImage } = req.body;
        const newPost = new Post({
            title,
            content,
            author: req.user.id,
            headerImage
        });
        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username');
        if (!post) return res.status(404).json({ msg: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: 'Post not found' });
        if (post.author.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        post.headerImage = req.body.headerImage || post.headerImage;

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: 'Post not found' });
        if (post.author.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        await post.remove();
        res.json({ msg: 'Post removed' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.markAsRead = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        user.readPosts.push(req.params.id);
        await user.save();
        res.json(user.readPosts);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getReadPosts = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('readPosts');
        res.json(user.readPosts);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
