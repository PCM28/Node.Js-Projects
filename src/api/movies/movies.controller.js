const {restart} = require('nodemon');
const Movie = require('./movies.model');

const getAllMovies = async (req, res, next) => {
    try{
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch(error){
        return res.status(500).json(error);
    }
}

const getMovie = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const game = await Movie.findById(id);
        if(game) return res.status(200).json(game);
        else return res.status(404).json('Juego no encontrado');
    }catch(error){
        return res.status(500).json(error);
    }
}

const postMovie = async(req,res,next)=>{
    try{
        const newMovie = new Movie(req.body);
        const createMovie = await newMovie.sabe();
        return res.status(201).json(createMovie);
    }catch(error){
        return res.status(500).json(error);
    }
}

const putMovie = async (req,res,next) =>{
    try{
        console.log(req.params.id);
        const id = req.params.id;
        const movie = new Movie(req.body);
        movie._id=id;
        console.log(movie);
        const updateMovie = await Movie.findByIdAndDelete(id);
        return res.status(200).json(updateMovie);
    }catch(error){
        return res.status
    }
}

const deleteMovie = async(req,res,next) => {
    try{
        const id = req.params.id;
        const movieDb = await Movie.findByIdAndDelete(id);
    } catch(error){
        return res.status(500).json(error);
    }
}

module.exports = {getAllMovies, getMovie, postMovie, putMovie, deleteMovie}