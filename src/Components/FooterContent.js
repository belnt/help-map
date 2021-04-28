import React from 'react';
import './FooterContent.css';
import ButtonCan from './Button-can'
import ButtonNeed from './Button-need'

const FooterContent = (props) => {
    return (
        <div className="footer-content">
            <ButtonCan />
            <ButtonNeed />
        </div>
    );
}

export default FooterContent;
