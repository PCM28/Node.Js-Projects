const mongoose = require('mongoose');
const db = require('../database/database');
const Movie = require('../../api/movies/movies.model');

const initialMovies = [
    {
      name: 'James Bond',
      location: 'UK',
      movies: 'Spectre',
    },
    {
      name: 'Eiffel',
      location: 'France',
      movies: 'Second',
    },
  ];

  mongoose
    .connect(db.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async()=>{
        const allMovies = await Movie.find();
        if(allMovies.length){
            console.log('Eliminando colección de movies...');
            await Movie.collection.drop();
        } else console.log('No hay movies en la base de datos... procediendo a añadir las movies');
    })
    .catch(error=>console.log('Error al borrar la colleción de la base de datos', error))
    .then(async()=>{
        await Movie.insertMany(initialMovies);
        console.log('Movies añadidos con éxito...');
    })
    .catch(error=> console.log('Error al añadir movies a la base de datos', error))
    .finally(()=> mongoose.disconnect());