// Je fais un import de mon model user
const UserModel = require('../models/book')
const fetch = require('node-fetch')

module.exports = {
    //fonction qui récupère les users
    getBook: (req, res) => {
        BookModel.find((err, book) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!book) {res.status(404).json({"message": "Book not found"})}
                res.render('./pages/book', {
                    book
                })
            }
        })
    },
    // fonction qui crée un nouvel user 
    createBook: async (req, res) => {
        //Je crée une variable qui va contenir les données créées
        const {firstname, lastname, age} = req.body
        const book = new BookModel({firstname, lastname, age})

        book.save((err, author) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(201).json({
                    status: 201,
                    message: "succes",
                    author
                })
            }
        })
    },
    //Fonction qui modifie un user
    updateBook: (req, res) => {
        const {firstname, lastname, age} = req.body

        BookModel.findOneAndUpdate({Id: req.params.Id}, {firstname, lastname, age}, (err, author) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!author) {res.status(404).json({"message": "Author not found"})}
                res.status(200).json({
                    "message": "success"
                })
            }
        })
    },
    //Supprimer un user
    deleteBook: (req, res) => {
        BookModel.findOneAndDelete({Id: req.params.Id}, (err, user) => {
            if (!author) {
                return res.status(404).json({message: "Author not found"})
            }
            res.json(author)
        })
    },
}