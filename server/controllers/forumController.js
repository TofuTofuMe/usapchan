const {where} = require('sequelize');
const {Post, Comment} = require('../utils/sqlHandler');

exports.addPost = async (req, res) => {
    try {
        const {title, content} = req.body;
        await Post.create({title, content});
        res.status(201).redirect('/forum/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding post',
            error: error.message,
        });
    }
};

exports.addComment = async (req, res) => {
    try {
        const {postId, content} = req.body;
        await Comment.create({postId, content});
        res.status(201).json({
            success: true,
            message: 'Added comment',
            error: NaN,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding comment',
            error: error.message,
        });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            attributes: ['id', 'title', 'content'],
        });
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error getting posts',
            error: error.message,
        });
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            attributes: ['id', 'postId', 'content'],
        });
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error getting comments',
            error: error.message,
        });
    }
};

exports.dropPost = async (req, res) => {
    try {
        const {id, title} = req.body;

        const post = await Post.findOne({
            where: {
                id: id,
                title: title,
            },
        });

        if (!post) {
            return res.status(400).json({
                success: false,
                message: 'Post not found',
            });
        }

        await post.destroy();

        res.status(200).redirect('/forum/manage');
    } catch {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy post',
            error: error,
        });
    }
};

exports.dropComment = async (req, res) => {
    try {
        const {id, postId} = req.body;

        const comment = await Comment.findOne({
            where: {
                id: id,
                postId: postId,
            },
        });

        if (!comment) {
            return res.status(400).json({
                success: false,
                message: 'Comment not found',
            });
        }

        await comment.destroy();

        res.status(200).redirect('/forum/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy comment',
            error: error.message,
        });
    }
};
