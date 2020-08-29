import React, { Fragment } from 'react';
import { getTweets } from "../actions/HomeAction";

import { connect } from 'react-redux';

import Tweet from './Tweet';

class TweetList extends React.Component {
    componentDidMount() {
        this.getTweetsData();
    }
    getTweetsData = () => {
        this.props.getTweetsData()
    }
    
    render() {
        return (
            <Fragment>
              <div className="my-2">
                {  this.props.TweetData.map(tweet =>  <Tweet key={`${tweet.id}`} tweet={tweet} /> )}
              </div>
              
            </Fragment>
        )
    }
}

const mapDispatchToProps = {
    getTweetsData: getTweets,
};

const mapStateToProps = (state) => ({
    TweetData : state.home.TweetList
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetList);