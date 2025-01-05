import { model, Schema } from "mongoose";

const schema = Schema({
    title : {
        type : String,
        require : true,
        unique : true
    }, 
    description : {
        type : String,
        require : true
    }
});

const Movie = model('Movie', schema);

export default Movie;