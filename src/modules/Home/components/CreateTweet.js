import React, { Fragment } from 'react';
import UserIcon from "./UserIcon";
import '../styles/CreateTweetStyle.css';
import {createTweet} from "../actions/CreateTweetAction";
import { connect } from 'react-redux';


class CreateTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = { postBody: '', imgPath:'', imgFile : '' };
    }

    createTweet = (reqBody, imgPath) => {
        this.props.CreateTweet({reqBody, imgPath});
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    validateInput = () => {
        if(this.state.imgPath) {
            return true;
        }
        if((this.state.postBody.length === 0 || this.state.postBody.length > 280)) {
            return false;
        }
        return true;
    }
    handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            imgFile: file,
            imgPath: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    onSubmit = async (e)  => {
        e.preventDefault();
        if(this.validateInput()) {
            const reqBody = this.state.postBody;
            const imgpath = this.state.imgPath;
            this.setState({ postBody:"" ,imgPath:""});
            this.createTweet(reqBody,imgpath );
            
            
        }
    }
    render() {

        let $imagePreview = this.state.imgPath && (<img className="img-preview" alt="" src={this.state.imgPath} />);
        return (
            <Fragment>
                <form onSubmit={this.onSubmit}>
                    <div className=" my-2">
                        <div className="row m-0 col-12 ">
                            <div className="col-1">
                                    <UserIcon url="http://placeimg.com/45/45/any"/>
                            </div>
                            <div className="col-10 ">
                                <textarea onChange={this.onChange} value={this.state.postBody} name="postBody" className="form-control create-post" rows="2" placeholder="What's happening.."></textarea>
                                {$imagePreview}
                            </div>
                            <div className="col-10 offset-1">
                                    <div className="row m-0">
                                        <div className="col-6">
                                            <label htmlFor="file-upload" className="custom-file-upload">
                                                <i className="la la-image la-2x text-primary"></i> 
                                            </label>
                                            <input onChange={this.handleImageChange} id="file-upload" type="file"/>
                                            <i className="la la-poll-h la-2x text-primary"></i>
                                            <i className="la la-smile la-2x text-primary"></i>
                                        </div>
                                        <div className="col-6 p-1 text-right"> 
                                            <button className="btn btn-primary rounded-pill font-weight-bold">Tweet</button>
                                        </div>
                                    </div>
                                    
                            </div>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }
}

const mapDispatchToProps = {
    CreateTweet: createTweet,
};

const mapStateToProps = (state) => ({
   
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTweet);