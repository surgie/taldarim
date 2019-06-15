import express from 'express';

var router = express.Router();

router.get('/', index);
router.get('/:userId', userDetails);

function index(req, res, next) {
    res.send('users index page');
}

function userDetails(req, res, next) {
    res.send(`user details for ${req.params.userId}`);
}

export default router;
