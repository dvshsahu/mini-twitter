import { LIKE_TWEET, UNLIKE_TWEET } from "../../../redux/ActionType";


export const likeTweet = (id) => async (dispatch) => {
    try{
        dispatch({type : LIKE_TWEET, payload : {id}});
    }
    catch(e) {
        console.log(e);
    }
};
export const unlikeTweet = (id) => async (dispatch) => {
    try{
        dispatch({type : UNLIKE_TWEET, payload : {id}});
    }
    catch(e) {
        console.log(e);
    }
};