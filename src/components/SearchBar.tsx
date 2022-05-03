import * as React from 'react';
import {useState, useRef} from 'react';
import search from '../assets/icon-search.svg';
import {User} from './User';

export interface SearchBarProps {
    darkMode: boolean;
    userdata: User;
    setUserdata?:React.Dispatch<React.SetStateAction<User>>;
}

export default function SearchBar({darkMode, userdata, setUserdata}: SearchBarProps) {
    const [input, setInput] = useState('');
    const [isError, setIsError] = useState(false);
    const spanRef = useRef<HTMLSpanElement>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInput(e.target.value);
        setIsError(false);
        if(spanRef.current) {
            spanRef.current.style.cssText += "display:none;";
        };
    }


    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch(`https://api.github.com/users/${input}`)
        .then(response => {
            if (!response.ok) {
                setIsError(true);
                if(spanRef.current) {
                    spanRef.current.style.cssText += "display:inline;";
                };
            }
            return response.json();
        })
        .then(data => setUserdata && setUserdata(data))
    }

    return (
    <div className={darkMode ? "searchbar_dm":"searchbar_lm"}>
      <img className="icon-search" src={search} alt="" />
      <form onSubmit={handleSubmit} >
        <input className={darkMode? "inputbar_dm": "inputbar_lm"} type="text" placeholder="Search Github username..." value={input} onChange={(e) => handleChange(e)}/>
        <span ref={spanRef}>No results</span>
        <button type="submit" className="btn-search">Search</button>
    </form>
    </div>
  );
}
