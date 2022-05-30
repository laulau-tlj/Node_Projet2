const { Schema, model } = require('mongoose')

Author = new Schema({
    id: String
})

 Article = new Schema({
    title: String,
    description: String
})

const Book = new Schema ({
    title: String,
    description: String,
    publication_date: Date
})

const BookModel = model('Book', Book)
const ArticleModel = model('Article', Article)
const AuthorModel = model('Author', Author)


module.exports = {
    ArticleModel,
    AuthorModel,
    BookModel
}