import React, { Fragment } from 'react';
import CreateTweet from './CreateTweet';
import TweetList from './TweetList';


// importing styles
import '../styles/HomeStyle.css';

class Home extends React.Component {
    componentDidMount() {
        // Fetch all tweets
    }
    render() {
        return (
            <Fragment>
              <div className="row col-12 my-2">
                <div className="col-6 font-weight-bold">
                    HOME
                </div>
                <div className=" col-6 text-primary text-right">
                    <i className="la la-twitter la-2x"></i>
                </div>
              </div>  
              <hr />
              
              {/*  Create Tweet */}
              <CreateTweet />
              <br/>
              <hr />
             
              {/*  Tweets */}
              <TweetList />
            </Fragment>
        )
    }
}

export default Home;