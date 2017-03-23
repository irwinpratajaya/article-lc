var express = require('express');
var router = express.Router();
var article = require('../controllers/articles')

/* GET home page. */
router.get('/', article.getArticles)

router.get('/:id', article.getArticle)

router.post('/', article.create)

router.delete('/', article.delete)

router.put('/', article.update)

module.exports = router;
