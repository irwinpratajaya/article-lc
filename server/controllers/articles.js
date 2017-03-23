var article = require('../models/articles')

var articles = {}

articles.getArticles = function (req,res,next) {
  article.find({}).populate('author').then(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

articles.getArticle = function (req,res,next) {
  article.find({_id:req.params.id}).then(function (err,data) {
    if(err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

articles.create = function (req,res,next) {
  article.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  }).then(function (err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

articles.update = function (req,res,next) {
  article.update({
    _id: req.params.id
  }, {
    $set: req.body
  }).then(function (err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

articles.delete = function (req,res,next) {
  article.find({_id: req.params.id}).remove(function (err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}



module.exports = articles
