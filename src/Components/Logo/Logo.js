import React from 'react';
import { Tilt } from 'react-tilt';
import './Logo.css'
import brain from './icons8-brain-100.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
    <Tilt className="tilt br2 shadow-2" options={{max:55}} style={{ height: 150, width: 150 }}>
      <div className='tilt-inner pa3'>
        <img style={{paddingTop:"5px"}} src={brain} alt="logo"/>
      </div>
    </Tilt>
    </div>
  );
}

export default Logo;
