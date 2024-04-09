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

exports.getAllPosts = async (req, res, approved = false) => {
    try {
        const posts = await Post.findAll({
            attributes: [
                ['id', 'postId'],
                'title',
                'content',
                'poster',
                'viewCount',
                'createdAt',
                'approved',
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
            where: approved == true ? {approved: true} : {},
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

exports.getApprovedPosts = async (req, res) => {
    this.getAllPosts(req, res, true);
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
            await post.increment('viewCount', {by: 1});
            return res.status(200).send(post);
        } else {
            return res.status(404).end();
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error getting post.',
            error: error.message,
        });
        console.error;
    }
};

exports.approvePost = async (req, res) => {
    try {
        const post = await Post.findOne({
            where: {
                id: req.params.postId,
            },
        });
        await post.update({approved: true});
        res.status(200).redirect('/forum/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to approve post.',
            error: error.message,
        });
    }
};

exports.unapprovePost = async (req, res) => {
    try {
        const post = await Post.findOne({
            where: {
                id: req.params.postId,
            },
        });
        await post.update({approved: false});
        res.status(200).redirect('/forum/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to unapprove post.',
            error: error.message,
        });
    }
};

exports.dropPost = async (req, res) => {
    try {
        const post = await Post.findOne({
            where: {id: req.params.postId},
        });
        if (!post) {
            return res.status(400).json({
                success: false,
                message: 'Post not found.',
            });
        }
        await post.destroy();
        res.status(200).redirect('/forum/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy post.',
            error: error.message,
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
        res.status(200).redirect('/forum/manage');
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to destroy comment.',
            error: error.message,
        });
    }
};
