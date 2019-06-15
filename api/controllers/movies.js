import axios from 'axios';
import express from 'express';

var router = express.Router();

router.get('/', index);
router.get('/random', randomMovie);

function index(req, res, next) {
    res.send('movies index page');
}

async function randomMovie(req, res, next) {
    const movieOptions = [
      'tt3896198',
      'tt0071253',
      'tt0109686',
      'tt2267998',
      'tt0109040',
      'tt0089218'
    ]

    const movieID = movieOptions[Math.floor(Math.random() * movieOptions.length)]

    const movie = await axios.get(
      `https://www.omdbapi.com/?i=${movieID}&apikey=9733f1df`
    )

    res.json(movie.data)
}

export default router;
