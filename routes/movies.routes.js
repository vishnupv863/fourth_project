import express from 'express';
import {movieIndex, singleMovie, movieCreate, movieUpdate, deleteMovies} from '../conrtollers/movies.controllers.js'

const router = express.Router();

// for getting all details of movie lists
router.get('/', movieIndex);

// for getting details of a single movie
router.get('/:id', singleMovie);

// for creating movie list
router.post('/', movieCreate);

// for updating movie list
router.put('/:id', movieUpdate);

// for deleting movie list
router.delete('/:id', deleteMovies)

export default router;
