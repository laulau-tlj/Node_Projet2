// Je fais un import de mon model user
const UserModel = require('../models/authors')
const fetch = require('node-fetch')

module.exports = {
    //fonction qui récupère les users
    getAuthor: (req, res) => {
        AuthorModel.find((err, author) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                if (!author) {res.status(404).json({"message": "Author not found"})}
                res.render('./pages/author', {
                    author
                })
            }
        })
    },
    // fonction qui crée un nouvel user 
    createAuthor: async (req, res) => {
        //Je crée une variable qui va contenir les données créées
        const {firstname, lastname, age} = req.body
        const author = new AuthorModel({firstname, lastname, age})

        author.save((err, author) => {
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
    updateAuthor: (req, res) => {
        const {firstname, lastname, age} = req.body

        AuthorModel.findOneAndUpdate({Id: req.params.Id}, {firstname, lastname, age}, (err, author) => {
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
    deleteAuthor: (req, res) => {
        AuthorModel.findOneAndDelete({Id: req.params.Id}, (err, user) => {
            if (!author) {
                return res.status(404).json({message: "Author not found"})
            }
            res.json(author)
        })
    },
}