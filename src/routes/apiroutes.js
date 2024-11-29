import express from 'express';
import v1Router from './v1/v1route.js'
import v2Router from './v2/v2Route.js'
const router=express.Router();

router.use('/v1',v1Router);

router.use('/v2',v2Router);

export default router;