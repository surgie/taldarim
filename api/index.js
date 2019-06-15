import express from 'express';
import controllers from './controllers';

const app = express();

app.use('/users', controllers.users);
app.use('/movies', controllers.movies);

app.get('/', (req, res, next) => {
    res.send('API root hrmm');
});

// export the server middleware
export default {
    path: '/api',
    handler: app
};
