const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const guitarSchema = new Schema({
  type: { type: String, required: true, trim: true },
  make: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
});

const guitar = Mongoose.model('guitar', guitarSchema); // This means it's in a Mongodb collection called "guitars"

module.exports = {
  Guitar: guitar,
};
