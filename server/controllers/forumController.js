const {Sequelize} = require('sequelize');
const {Post, Comment} = require('../utils/sqlHandler');

exports.addPost = async (req, res) => {
    try {
        const {title, content, poster} = req.body;
        await Post.create({title, content, poster});

        res.status(201).json({
            success: true,
            message: 'Sucessfully posted!',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding post.',
            error: error.message,
        });
        console.error(error);
    }
};

exports.addComment = async (req, res) => {
    try {
        const {content, poster} = req.body;
        const postId = req.params.postId;
        await Comment.create({postId, content, poster});
        res.status(201).json({
            success: true,
            message: 'Successfully commented!',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding comment.',
            error: error.message,
        });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            attributes: [
                'id',
                'title',
                'content',
                'poster',
                'createdAt',
                [
                    Sequelize.fn('COUNT', Sequelize.col('comments.id')),
                    'commentCount',
                ],
            ],
            include: [
                {
                    model: Comment,
                    as: 'comments',
                    attributes: [],
                },
            ],
            group: ['Post.id'],
        });
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error getting posts.',
            error: error.message,
        });
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            attributes: ['id', 'postId', 'content', 'poster', 'createdAt'],
        });
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error getting comments.',
            error: error.message,
        });
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findOne({
            where: {
                id: req.params.postId,
            },
            include: {model: Comment, as: 'comments'},
        });

        if (post) {
            return res.status(200).send(post);
        } else {
            return res.status(404).end();
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error getting post',
            error: error.message,
        });
        console.error;
    }
};

exports.dropPost = async (req, res) => {
    try {
        const {id, title, poster} = req.body;

        const post = await Post.findOne({
            where: {
                id: id,
                title: title,
                poster: poster,
            },
        });

        if (!post) {
            return res.status(400).json({
                success: false,
                message: 'Post not found.',
            });
        }
        await post.destroy();
        res.status(200).json({
            success: true,
            message: 'Successfully dropped post',
        });
    } catch {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy post.',
            error: error,
        });
    }
};

exports.dropComment = async (req, res) => {
    try {
        const {id, postId, poster} = req.body;

        const comment = await Comment.findOne({
            where: {
                id: id,
                postId: postId,
                poster: poster,
            },
        });

        if (!comment) {
            return res.status(400).json({
                success: false,
                message: 'Comment not found.',
            });
        }
        await comment.destroy();
        res.status(200).json({
            success: true,
            message: 'Successfully dropped comment',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy comment.',
            error: error.message,
        });
    }
};
