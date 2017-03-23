const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = Schema({
  title: String,
  content: String,
  author: [{type: Schema.Types.ObjectId, ref: 'user'}]
}, {
  timestamps: true
})

var article = mongoose.model('article', articleSchema );

module.exports = article
