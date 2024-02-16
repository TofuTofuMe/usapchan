module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        code: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    const Faculty = sequelize.define('Faculty', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        rank: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    const Schedule = sequelize.define('Schedule', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        day: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        section: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    });

    Faculty.hasMany(Schedule, {
        as: 'schedules',
        sourceKey: 'name',
        foreignKey: {name: 'facultyName', type: DataTypes.STRING},
    });
    Schedule.belongsTo(Faculty, {
        targetKey: 'name',
        foreignKey: {name: 'facultyName', type: DataTypes.STRING},
    });
    Schedule.belongsTo(Course, {
        targetKey: 'code',
        foreignKey: {name: 'courseCode', type: DataTypes.STRING},
    });
    Course.hasMany(Schedule, {
        as: 'schedules',
        sourceKey: 'code',
        foreignKey: {name: 'courseCode', type: DataTypes.STRING},
    });

    return {Course, Faculty, Schedule};
};
