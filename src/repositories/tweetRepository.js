import Tweet from "../schema/tweet.js"
import { getTweet as getTweetRepositories } from "../controllers/tweetControllers.js";
export const createTweet=async({body,image})=>{
    try{
        const tweet=await Tweet.create({body,image});
        image:req.file?.location;
        return tweet;
    }
    catch(error){
        throw error;
    }
}

export const getTweets = async () => {
    try {
        const tweets=await Tweet.find();
        return tweets;
    }
    catch(error){
        throw error;
    }
}

export const getTweetbyid=async(tweetID)=>{
    try{
        const tweet=await Tweet.findById(tweetID);
        return tweet;
    } 
    catch(error){
        throw error;
    }
}

export const getTweet=async()=>{
    const tweets=await getTweetRepositories();
    return tweets;
}