module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Post.hasMany(Comment, {
        as: 'comments',
        sourceKey: 'id',
        foreignKey: {name: 'postId', type: DataTypes.STRING},
    });
    Comment.belongsTo(Post, {
        targetKey: 'id',
        foreignKey: {name: 'postId', type: DataTypes.STRING},
    });

    return {Post, Comment};
};
