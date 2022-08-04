const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema(
    {
        name:{type: String, required:true},
        location: {type: String, required:true},
        movies: {type:String, required: true},//Que va dentro del num
    },{
        timestamps:true,
    });
const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;