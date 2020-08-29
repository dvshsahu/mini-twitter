import React, { Fragment } from 'react';
import '../styles/ActionIconStyles.css'
import { likeTweet, unlikeTweet } from "../actions/ActionIconsAction";

import { connect } from 'react-redux';

class ActionIcons extends React.Component {

    likeTweet = () => {
        this.props.likeTweet(this.props.id)
    }
    unlikeTweet = () => {
        this.props.unlikeTweet(this.props.id)
    }
    
    render() {
        let $likedElem = null;
        if(!this.props.actionCounts.isLiked) {
            $likedElem = <i onClick={this.likeTweet} className="la la-thumbs-up la-2x text-primary"></i>
        } else {
            $likedElem = <i onClick={this.unlikeTweet} className="la la-thumbs-up la-2x text-primary"></i>
        }
        return(
            <Fragment>
                <div className="row m-0">
                    <div className="col text-center"> 
                        {$likedElem} &nbsp; 
                        <span className="text-center text-primary action-count-style"> {this.props.actionCounts.likes}</span> 
                    </div>
                    <div className="col text-center"> 
                        <i className="la la-comment la-2x text-primary"></i> &nbsp;
                        <span className="text-center text-primary action-count-style"> {this.props.actionCounts.comments}</span> 
                    </div>
                    <div className="col text-center"> 
                        <i className="la la-retweet la-2x text-primary"></i> &nbsp; 
                        <span className="text-center text-primary action-count-style"> {this.props.actionCounts.retweet}</span> 
                    </div>
                </div>
            </Fragment>
        )
    }
    
}


const mapDispatchToProps = {
    likeTweet: likeTweet,
    unlikeTweet: unlikeTweet
};

const mapStateToProps = (state) => ({
    TweetData : state.home.TweetList
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionIcons);