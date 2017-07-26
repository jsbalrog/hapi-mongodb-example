const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
});

const user = Mongoose.model('user', userSchema); // This means it's in a Mongodb collection called "users"

module.exports = {
  User: user,
};
