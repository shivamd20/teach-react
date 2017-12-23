import React, {Component} from 'react';
import AppBar from './appbar/appbar';
import Profile from './profile-component/profile';
import Trending from './trending-component/trending';
import PostTweet from './post-tweet-component/post-tweet';
import Tweet from './tweet-component/tweet';
import WhoToFollow from './who-to-follow-component/who-to-follow';
import About from './about-component/about';
import './root.css';

class Root extends Component{

    render(){
        
    return <span>
            <AppBar className="appbar"/>
            <Profile className="profile"/>
            <Trending classname="trending"/>
            <PostTweet classname="posttweet"/>
            <Tweet classname="tweet"/>
            <WhoToFollow classname="whotofollow"/>
            <About/>
        </span>;
    }

    // function(){
    //     dkfjgd
    // }

   

}

export default Root;