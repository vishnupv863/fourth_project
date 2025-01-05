import Movie from '../models/movies.models.js'


// for getting details of all movie lists
export const movieIndex = async (req, res) => {
    try {
        const movieList = await Movie.find();
        return res.status(200).json(movieList);

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

// for getting details of a single movie
export const singleMovie = async (req, res) => {
    try {
        const movieList = await Movie.findById({ _id: req.params.id });
        return res.status(200).json(movieList);

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

// for creating movie list
export const movieCreate = async (req, res) => {
    try {
        const movie = await new Movie({
            title: req.body.title,
            description: req.body.description
        })
        movie.save();

        return res.status(200).json(movie)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// for updating movie list
export const movieUpdate = async (req, res) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate(
            {
                _id : req.params.id
            },
            {
                title : req.body.title,
                description : req.body.description
            },
            {
                new : true
            }
        );
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// for deleting movies
export const deleteMovies = async (req, res) => {
    try {
        const movie = await Movie.deleteOne({_id: req.params.id}); 
        const movieList = await Movie.find();
        return res.status(200).json(movieList);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
    
}