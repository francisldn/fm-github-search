import * as React from 'react';
import sun from '../assets/icon-sun.svg';
import moon from '../assets/icon-moon.svg';
import { DarkModeProps } from '../App';

export default function Heading ({darkMode, setDarkMode}: DarkModeProps) {
    
    const toggleDarkMode = () => {
        setDarkMode && setDarkMode(!darkMode);
    }
 

  return (
    <div className={darkMode? "header_dm" : "header_lm"}>
      <h1>devfinder</h1>
      <div className={darkMode? "header_right_dm": "header_right_lm"}>
        <span className="text-mode">{darkMode? "LIGHT" : "DARK" }</span>
        <img src={darkMode? sun : moon} alt="" onClick={toggleDarkMode}/>
      </div>
    </div>
  );
}
