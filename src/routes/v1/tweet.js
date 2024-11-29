import express from 'express';
import { getTweet, createTweet,getTweetbyId } from '../../controllers/tweetControllers.js';
import {validate} from '../../validators/ZodValidator.js'
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';

const router=express.Router();


router.get('/',getTweet);

router.get('/:id',getTweetbyId);

router.post('/',validate(tweetZodSchema),createTweet);

export default router;
