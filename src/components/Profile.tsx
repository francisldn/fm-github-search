import * as React from 'react';
import { SearchBarProps } from './SearchBar';
import twitter from '../assets/icon-twitter.svg';
import blog from '../assets/icon-website.svg';
import location from '../assets/icon-location.svg';
import company from '../assets/icon-company.svg';

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
                        <img className="img-user" src={userdata.avatar_url} alt="user avatar" />
                    </div>
            </div>
            <div className="user-data-container">
                <div className="user-header">
                    <h1>{userdata.name}</h1>
                    <span>{`Joined ${formatDate(userdata.created_at)}`}</span>
                </div>
                <div><span>{`@${userdata.login}`}</span></div>
                <div className="user-bio-box">
                    <p className="">{userdata.bio? userdata.bio : `This profile has no bio` }</p>
                </div>
                <div className={darkMode? "user-stats-box_dm": "user-stats-box_lm"}>
                    <div className="user-repos">
                        <span>Repos</span>
                        <h2>{userdata.public_repos}</h2>
                    </div>
                    <div className="user-followers">
                        <span>Followers</span>
                        <h2>{userdata.followers}</h2>
                    </div>
                    <div className="user-following">
                        <span>Following</span>
                        <h2>{userdata.following}</h2>
                    </div>
                </div>
                <div className="user-bottom">
       
                    <div className="user-bottom-info">
                        <img src={location} alt="location" />
                        <span>{userdata.location}</span>
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
