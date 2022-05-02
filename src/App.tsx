import React,{useState, useEffect} from 'react';
import './scss/index.css';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import { User } from './components/User';

export interface DarkModeProps {
  darkMode: boolean;
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

let userResponse = {
    avatar_url:'',
    followers: null,
    following: null,
    blog:'',
    location:'',
    public_repos:null,
    company: '',
    twitter_username: '',
    created_at:'',
    bio: '',
    name: '',
    login: '',
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userdata, setUserdata] = useState(new User(userResponse))

  return (
    <div className={darkMode ? "container_dm": "container_lm"}>
      <Heading darkMode={darkMode} setDarkMode={setDarkMode}/>
      <SearchBar darkMode={darkMode} userdata={userdata} setUserdata={setUserdata}/>
      
      <Profile darkMode={darkMode} userdata={userdata} />
      
    </div>
  );
}

export default App;
