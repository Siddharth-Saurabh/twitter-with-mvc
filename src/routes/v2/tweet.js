import express from 'express';


const router=express.Router();


router.get('/',(req,res)=>{
    return res.json({
        message:'welcome to tweet route second version'
    })
})

router.get('/:id',(req,res)=>{
    return res.json({
        message:'welcome to tweet route second version',
        id:req.params.id
    })
})

export default router;
