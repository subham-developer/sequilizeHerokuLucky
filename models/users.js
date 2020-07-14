const bcrypt = require('bcrypt');
        // users.schema("goldenewemi2");
        module.exports = (sequelize, DataTypes) => {
            const User = sequelize.define('user', {
                // attributes
                userUniqueId: {
                    type: DataTypes.STRING,
                    field: 'user_unique_id',
                    unique: true
                },
                firstName: {
                    type: DataTypes.STRING,
                    field: 'first_name',
                    allowNull: false,
                    validate: {
                        len: {
                            args: [0, 30]
                        }
                    }
                },
                lastName: {
                    type: DataTypes.STRING,
                    field: 'last_name',
                    allowNull: false,
                    validate: {
                        len: {
                            args: [0, 30]
                        }
                    }
                },
                password: {
                    type: DataTypes.TEXT,
                    field: 'password',
                },
                mobileNumber: {
                    type: DataTypes.STRING,
                    field: 'mobile_number',
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    field: 'email',
                    allowNull: false,
                    validate: {
                        len: {
                            args: [0, 30]
                        }
                    }
                },
                panCardNumber: {
                    type: DataTypes.STRING,
                    field: 'pan_card_number',
                },
                userTypeId: {
                    type: DataTypes.INTEGER,
                    field: 'user_type_id',
                    allowNull: false,
                },
                createdBy: {
                    type: DataTypes.INTEGER,
                    field: 'created_by',
                },
                modifiedBy: {
                    type: DataTypes.INTEGER,
                    field: 'modified_by',
                },
                isActive: {
                    type: DataTypes.BOOLEAN,
                    field: 'is_active',
                    defaultValue: true
                },
                lastLogin: {
                    type: DataTypes.DATE,
                    field: 'last_login',
                }
            }, {
                freezeTableName: true,
                tableName: 'user',
            });
        
        

        // // defining Association
        // User.associate = function(models) {
        //     User.hasMany(models.user_address, { foreignKey: 'userId', as: 'address' });
        //     User.belongsTo(models.userType, { foreignKey: 'userTypeId', as: 'userType' });
        //     User.belongsToMany(models.role, {through: models.userRole });
        //     User.hasMany(models.merchantCategoryCommission,{foreignKey:'userId', as:'user'});
        //     User.belongsToMany(models.products, {through: models.merchantProduct });
        //     User.hasMany(models.productPrice, { foreignKey: 'userId', as: 'users' });
        //     User.belongsTo(models.user, { foreignKey: 'createdBy', as: 'createdByUser' });
        //     User.belongsTo(models.user, { foreignKey: 'modifiedBy', as: 'modifiedByUser' });
        //     User.belongsToMany(models.internalBranch, { through: models.userInternalBranch });
        //     User.hasMany(models.orderTrackings, { foreignKey: 'createdBy', as: 'stausChangedBy' });
        //     User.hasMany(models.merchant, { foreignKey: 'userId', as: 'userMerchant' });
        // }
        

        // User.readUserById=(id)=> User.findOne(
        //     {
        //         where:{
        //             isActive:true
        //         },
        //         include: [{
        //          model: models.user_address,
        //          as: "addresses",
        //          where: {
        //            isActive: true
        //          },
        //          include:[
        //          {
        //            model:models.countries,
        //          },{
        //              model:models.state,
        //          },{              
        //            model:models.city,
        //          }],
        //      },
        //      {
        //      model: models.roles,
        //      as: "roles",
        //      where: {
        //          isActive: true
        //          },
        //      include:[{
        //          model: models.permission,
        //          as: "permissions",
        //          where: {
        //              isActive: true
        //          },
        //      }]
        //      },]
        //      }
        // );   
    
    
    // // Instance method for comparing password.
    // User.prototype.comparePassword = function (passw, cb) {
    //     return new Promise((resolve, reject) => {
    //         bcrypt.compare(passw, this.password, function (err, isMatch) {
    //             if (err) {
    //                 return err;
    //             }
    //             return resolve(isMatch)
    //         });
    //     });
    // };

    // User.beforeCreate(function (user, options, cb) {
    //     if (user.password) {
    //         return new Promise((resolve, reject) => {
    //             bcrypt.genSalt(10, function (err, salt) {
    //                 if (err) {
    //                     return err;
    //                 }
    //                 bcrypt.hash(user.password, salt, function (err, hash) {
    //                     if (err) {
    //                         return err;
    //                     }
    //                     user.password = hash;
    //                     return resolve(user, options);
    //                 });
    //             });
    //         });
    //     }
    // });

    // // This hook is always run before update.

    // User.beforeUpdate(function (user, options, cb) {
    //     if (user.password) {
    //         return new Promise((resolve, reject) => {
    //             bcrypt.genSalt(10, function (err, salt) {
    //                 if (err) {
    //                     return err;
    //                 }
    //                 bcrypt.hash(user.password, salt, function (err, hash) {
    //                     if (err) {
    //                         return err;
    //                     }
    //                     user.password = hash;
    //                     return resolve(user, options);
    //                 });
    //             });
    //         });
    //     }
    // });

    // User.prototype.toJSON = function () {
    //     var values = Object.assign({}, this.get());
    //     delete values.password;
    //     delete values.otp;
    //     delete values.status;
    //     delete values.createdAt;
    //     delete values.updatedAt;
    //     return values;
    // }

    //     //Update_User 
    //     User.updateUser = async (id, firstName,middleName,lastName,mobileNumber) => {
    //         try{
    //             let userData = await User.findOne({ where: { id: id, isActive: true } });
    //             if (userData) {
    //                 let userUpdated = await User.update({ firstName,middleName,lastName,mobileNumber }, { where: { id: id, isActive: true } });
    //                 return userUpdated;
    //             }
    //         }catch(err){
    //             console.log(err)
    //         }
            
    //     }
    //     //delete user
    //     User.removeUser = (id) => User.update({ isActive: false }, { where: { id: id, isActive: true } });

    //     User.createUser = (firstName,middleName,lastName,mobileNumber,email,userTypeId) => User.create({firstName,middleName,lastName,mobileNumber,email,userTypeId})

        return User;
}