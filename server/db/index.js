'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Product = require('./models/product');
var Review = require('./models/review');
var UserOrders = require('./models/userOrders');
var OrderDetails = require('./models/orderDetails');

UserOrders.belongsTo(User)

Review.belongsTo(Product)
Review.belongsTo(User, {as:'author'}) // setAuthor method on review

OrderDetails.belongsTo(Product);
// OrderDetails.belongsTo(UserOrders);
UserOrders.hasMany(OrderDetails);
OrderDetails.belongsTo(UserOrders);
