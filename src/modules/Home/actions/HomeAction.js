import { GET_TWEETS, GET_TWEET, LIKE_TWEET } from "../../../redux/ActionType";


export const getTweets = () => async (dispatch) => {
    try {
        let res = await fetch('https://my-json-server.typicode.com/dvshsahu/api-data/posts');
        const data = await res.json();
        data.forEach(element => {
            element.actions['isLiked'] = false;
        });
        dispatch({ type: GET_TWEETS, payload: data });
    }
    catch (e) {
        console.log(e);
    }
};

export const getTweet = (id) => async (dispatch) => {
     try {
        let res = await fetch('https://my-json-server.typicode.com/dvshsahu/api-data/posts/id');
        const data = await res.json();
         dispatch({type : GET_TWEET, payload : data});
     }
     catch(e) {
         console.log(e);
     }
};

export const likeTheTweet = (id) => async (dispatch) => {
    try {
        
        dispatch({ type: LIKE_TWEET, payload: {id} });
    }
    catch (e) {
        console.log(e);
    }
};