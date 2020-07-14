
module.exports = (sequelize, DataTypes) => {
    const TimePerMinutes = sequelize.define('timePerMinutes', {
        // attributes
        timeInMilliSec: {
            type: DataTypes.STRING,
            field: 'time_milli_sec',
            unique: true
        },
        minutes: {
            type: DataTypes.DATE,
            field: 'minutes',
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            field: 'is_active',
            defaultValue: true
        },
    }, {
        freezeTableName: true,
        tableName: 'time_per_minutes',
    });


    // // defining Association
    // TimePerMinutes.associate = function (models) {
    //     TimePerMinutes.hasMany(models.resultsDatas, { foreignKey: 'resultTimeId', as: 'timeStamp' });
    // }


    return TimePerMinutes;
}