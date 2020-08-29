import { GET_TWEETS,GET_TWEET, CREATE_TWEET, LIKE_TWEET, UNLIKE_TWEET } from '../ActionType';
 
let initialState = {
    TweetList : [],
    Tweet:{},

}

const HomeRecuder = (state = initialState, action) => {
   switch(action.type) {
       case GET_TWEETS: {
           return {...state, TweetList : action.payload} ;
       }
       case GET_TWEET: {
           return {...state, Tweet : action.payload} ;
       }
       case CREATE_TWEET: {
            const data = [...state.TweetList];
            data.splice(0,0,action.payload);
            return { ...state,TweetList : data} ;
        }
        case LIKE_TWEET: {
            const {id} = action.payload;
            const data = [...state.TweetList];
            const likes = data[id-1].actions.likes;
            data[id-1].actions.likes = likes + 1;
            data[id-1].actions.isLiked = true;
            return { ...state,TweetList : [...data]} ;
        }
        case UNLIKE_TWEET: {
            const {id} = action.payload;
            const data = [...state.TweetList];
            const likes = data[id-1].actions.likes;
            data[id-1].actions.likes = likes - 1;
            data[id-1].actions.isLiked = false;
            return { ...state,TweetList : [...data]} ;
        }
       default : {
           return {...state};
       }

   }
}
export default HomeRecuder;