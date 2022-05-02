import * as React from 'react';
import {useState} from 'react';
import search from '../assets/icon-search.svg';
import {User} from './User';


export interface SearchBarProps {
    darkMode: boolean;
    userdata: User;
    setUserdata?:React.Dispatch<React.SetStateAction<User>>;
}

export default function SearchBar({darkMode, userdata, setUserdata}: SearchBarProps) {
    const [input, setInput] = useState('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInput(e.target.value);
    }


    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch(`https://api.github.com/users/${input}`)
        .then(response => response.json())
        .then(data=> setUserdata && setUserdata(data))
        .catch((err) => {
            console.log(err)
        })
    }

    return (
    <div className={darkMode ? "searchbar_dm":"searchbar_lm"}>
      <img className="icon-search" src={search} alt="" />
      <form onSubmit={handleSubmit}>
        <input className={darkMode? "inputbar_dm": "inputbar_lm"} type="text" placeholder="Search Github username..." value={input} onChange={(e) => handleChange(e)}/>
        <button type="submit" className="btn-search">Search</button>
    </form>
    </div>
  );
}
