var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController');
const authorController = require('../controllers/authorController');
const bookController = require('../controllers/bookController');



//article page
router.route('/article').post(articleController.createArticle)
router.route('/home').get(articleController.getArticles)


//book page
router.route('/book').get(bookController.getBooks)
router.route('/book').post(bookController.createBook)
router.route('/book/:id').put(bookController.updateBook)
router.route('/book/:id').delete(bookController.deleteBook)

//author page
router.route('/author').get(authorController.getAuthor)
router.route('/author').post(authorController.createAuthor)
router.route('/author/:Id').put(authorController.updateAuthor)
router.route('/author/:Id').delete(authorController.deleteAuthor)

module.exports = router;
