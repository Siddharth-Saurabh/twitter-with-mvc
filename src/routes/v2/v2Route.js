import express from 'express';
import twitterRouter from './tweet.js'

const router= express.Router();

router.use('/tweet',twitterRouter);

export default router;