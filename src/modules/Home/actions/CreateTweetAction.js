import { CREATE_TWEET } from "../../../redux/ActionType";

const prepareReqData = (reqBody, imgPath) => {
    const reqObj = {
        "body": reqBody,
        "handle_name": "@drake135",
        "title": "reqBody",
        "tweet_date": new Date(),
        "userId": 1,
        "user_img_url": "http://placeimg.com/45/45/any",
        "user_name": "drake",
        "actions": {
            "likes": 0,
            "comments": 0,
            "retweet": 0
        }
    }
    if(imgPath.length !== 0) {
        reqObj["post_img_url"] = imgPath;
    }
    return reqObj;
}

export const createTweet = ({reqBody, imgPath}) => async (dispatch) => {
    try{
        const req = {...prepareReqData(reqBody, imgPath)};
        const res = await fetch('https://my-json-server.typicode.com/dvshsahu/api-data/posts', {
            method: 'POST',
            body: JSON.stringify(req),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        const data  = await res.json();
        data.actions['isLiked'] = false;
        dispatch({type : CREATE_TWEET, payload : data});
    }
    catch(e) {
        console.log(e);
    }
};