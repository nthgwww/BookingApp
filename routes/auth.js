import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from the API Authentication!');
})
router.get('/register', (req, res) => {
    res.send('Hello from the Auth Register Authentication!');
})

export default router;