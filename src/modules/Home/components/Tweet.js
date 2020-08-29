import React, { Fragment } from 'react';
import {passedTime, validURL} from "../../../utilities/helperMethod/utils";

import UserIcon from "./UserIcon";
import ActionIcons from "./ActionIcons";
import '../styles/TweetStyle.css';

const checkValidURL = (str) => {
    const res = [];
    str.split(" ").map(s => {
            if(validURL(s)) {
                res.push(`<a href="${s}"> ${s} </a>`);
            }
            else {
                res.push(s);
            }
        });
    return res.join(" ");
}
const Tweet = ({ tweet }) => {

    return (

        <Fragment>
            <div className="row m-0 col-12 my-2">
                <div className="col-1">
                <UserIcon url={tweet.user_img_url}/>
                </div>
                <div className="col-10">
                    <span className="font-weight-bold">{tweet.user_name}</span>
                    <span className="font-weight-bold text-muted px-2">{tweet.handle_name} :</span>
                    <span className="text-muted">{passedTime(tweet.tweet_date)}</span>
                    <span className="text-muted">
                        <i className="la la-angle-down float-right text-muted"></i>
                    </span>
                </div>
                <div className="col-10 offset-1">
                    {
                        checkValidURL(tweet.body) 
                    }
                    {
                        tweet.post_img_url && <div className="my-3"> 
                            <img src={tweet.post_img_url} className="post-img-style" alt={tweet.handle_name} />
                        </div>
                    }
                    <div className="my-3">
                        <ActionIcons actionCounts={tweet.actions} id={tweet.id}/>
                    </div>
                </div>
            </div>
            <hr />

        </Fragment>
    )

}


export default Tweet;
