

module.exports = (sequelize, DataTypes) => {
    const ResultsData = sequelize.define('resultsDatas', {
        // attributes
        timeInMilliSec: {
            type: DataTypes.STRING,
            field: 'time_milli_sec',
            // unique: true
        },
        data: {
            type: DataTypes.JSON,
            field: 'data',
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            field: 'is_active',
            defaultValue: true
        },
    }, {
        freezeTableName: true,
        tableName: 'results_datas',
    });


    // // defining Association
    // ResultsData.associate = function (models) {
    //     ResultsData.belongsTo(models.timePerMinutes, { foreignKey: 'resultTimeId', as: 'timeStamp' });
        // User.belongsTo(models.userType, { foreignKey: 'userTypeId', as: 'userType' });
        // User.belongsToMany(models.role, {through: models.userRole });
        // User.hasMany(models.merchantCategoryCommission,{foreignKey:'userId', as:'user'});
        // User.belongsToMany(models.products, {through: models.merchantProduct });
        // User.hasMany(models.productPrice, { foreignKey: 'userId', as: 'users' });
        // User.belongsTo(models.user, { foreignKey: 'createdBy', as: 'createdByUser' });
        // User.belongsTo(models.user, { foreignKey: 'modifiedBy', as: 'modifiedByUser' });
        // User.belongsToMany(models.internalBranch, { through: models.userInternalBranch });
        // User.hasMany(models.orderTrackings, { foreignKey: 'createdBy', as: 'stausChangedBy' });
        // User.hasMany(models.merchant, { foreignKey: 'userId', as: 'userMerchant' });
    // }


    return ResultsData;
}