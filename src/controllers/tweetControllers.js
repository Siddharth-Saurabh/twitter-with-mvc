import { createTweet as createTweetService} from "../services/tweetService.js";
import { getTweets as getTweetsService } from "../services/tweetService.js";    

export const getTweetbyId=(req,res)=>{
    return res.json({
        message:'welcome to tweet route',
        id : req.params.id
    });
}
export const createTweet= async(req,res)=>{
    try{
        const response=await createTweetService({
            body:req.body.body
        });

        return res.status(201).json({
            suecess:true,
            data: response,
            message:'tweet created suecessfully'
        })

    }
    catch(error){
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                message:error.message,
                suecess:false
            });
        }
        return res.status(500).json({
            message:'internal server error',
            suecess:false
        })
    }
}
export const getTweet=async(req,res)=>{
    try{
        const response=await getTweetsService();
        return res.status(200).json({
            message:'tweets fetched successfully',
            data:response,
            success:true
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:'internal server error',
            success:false
        })
    }
}