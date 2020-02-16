var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('../models/utils');

var userSchema = new Schema({
  displayName: {type: String},
  givenName: {type: String},
  mail: {type: String},
  studentId: {type: String},
  surname: {type: String},
  date_created : {type: Date, default: new Date()}
});

module.exports = mongoose.model('user', userSchema);

