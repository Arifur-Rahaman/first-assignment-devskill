import React from 'react';
import loader_img from '../assets/images/loader_img.gif'
const Loader = () => {
    return (
        <div style={{width: '100%', display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <img src={loader_img} alt="" />
        </div>
    );
};

export default Loader;