const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: String,
    price: String,
    description: String,
    image: String,
}
);

const restaurantSchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    email: String,
    image: String,
    menu: [menuSchema]
}
);


module.exports = mongoose.model('Restaurant', restaurantSchema);