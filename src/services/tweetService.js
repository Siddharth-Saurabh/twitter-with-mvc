import { Filter } from "bad-words"
import { createTweet as  createTweetRepo} from "../repositories/tweetRepository.js";

export const createTweet =async({body,image})=>{

    const filter=new Filter();

    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        throw new Error("tweet contains blocked words");
    }

    const tweet = await createTweetRepo({body,image});

    return tweet;
}
