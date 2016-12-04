var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var christmasItem = new Schema({
  item: { type: String, required: true }
});

// christmasItemSchema.pre('save', function(next) {
//   next();
// });

var XMasItem = mongoose.model('XMasItem', christmasItem);

module.exports = XMasItem;
