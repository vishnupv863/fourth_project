import Movie from '../models/movies.models.js'


// for getting details of all movie lists
export const movieIndex = async (req, res) => { }

// for getting details of a single movie
export const singleMovie = async (req, res) => { }

// for creating movie list
export const movieCreate = async (req, res) => {
    try {
        const movie = await new Movie({
            title: req.body.title,
            description: req.body.description
        })

        return res.status(200).json(movie)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// for updating movie list
export const movieUpdate = async (req, res) => { }

// for deleting movies
export const deleteMovies = async (req, res) => { }