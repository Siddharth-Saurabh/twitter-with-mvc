export const getTweet=(req,res)=>{
    return res.json({
        message:'welcome to tweet route'
    });
}
export const getTweetbyId=(req,res)=>{
    return res.json({
        message:'welcome to tweet route',
        id : req.params.id
    });
}
export const createTweet=(req,res)=>{
    return res.json({
        message:'tweet has been created'
    });
}