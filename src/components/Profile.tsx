import * as React from 'react';
import { SearchBarProps } from './SearchBar';
import twitter from '../assets/icon-twitter.svg';
import blog from '../assets/icon-website.svg';
import location from '../assets/icon-location.svg';
import company from '../assets/icon-company.svg';
import octocat from '../assets/octocat.png'

export default function Profile ({darkMode, userdata}:SearchBarProps) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const formatDate = (d: String): String | void => {
        if(d) {
            return  d.slice(8,10) + ' ' + months[Number(d.slice(5,7))] + ' ' + d.slice(0,4);
        }
    }

    console.log(userdata.created_at, formatDate(userdata.created_at))

    return (
        <div className={darkMode? "profile_dm": "profile_lm"}>
            <div className="user-img">
                    <div className="img-container">
                        <img className="img-user" src={userdata.avatar_url? userdata.avatar_url : octocat} alt="user avatar" />
                    </div>
            </div>
            <div className="user-data-container">
                <div className="user-header">
                    <h1>{userdata.name ? userdata.name : "The Octocat"}</h1>
                    <span>{`Joined ${formatDate(userdata.created_at) ? formatDate(userdata.created_at): "25 Feb 2011"}`}</span>
                </div>
                
                <div className="user-login"><span>{`@${userdata.login ? userdata.login : "octocat"}`}</span></div>
                
                <div className="user-bio-box">
                    <p>{userdata.bio? userdata.bio : `This profile has no bio` }</p>
                </div>
                <div className={darkMode? "user-stats-box_dm": "user-stats-box_lm"}>
                    <div className="user-repos">
                        <span>Repos</span>
                        <h2>{userdata.public_repos? userdata.public_repos: 8}</h2>
                    </div>
                    <div className="user-followers">
                        <span>Followers</span>
                        <h2>{userdata.followers ? userdata.followers : 10}</h2>
                    </div>
                    <div className="user-following">
                        <span>Following</span>
                        <h2>{userdata.following? userdata.following : 20}</h2>
                    </div>
                </div>
                <div className="user-bottom">
       
                    <div className="user-bottom-info">
                        <img src={location} alt="location" />
                        <span>{userdata.location ? userdata.location : "San Francisco"}</span>
                    </div>
                    <div className="user-bottom-info">
                        <img src={twitter} alt="twitter" />
                        <a href={userdata.twitter_username && userdata.twitter_username}>{userdata.twitter_username? userdata.twitter_username : "Not Available"}</a>
                    </div>
                    <div className="user-bottom-info">
                        <img src={blog} alt="blog" />
                        <a href={userdata.blog}>{userdata.blog ? userdata.blog : "Not Available"}</a>
                    </div>
                    <div className="user-bottom-info">
                        <img src={company} alt="company" />
                        <span>{userdata.company ? userdata.company: "@github"}</span>
                    </div>
    
                </div>

            </div>
        </div>
    );
}
