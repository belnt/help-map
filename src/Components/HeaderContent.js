import React from 'react';
import SocialShareButtonList from '../Social/SocialShareButtonList';
import './HeaderContent.css';

const HeaderContent = () => {
    return (
        <div className="header-content">
            <div className="brand">
                <div className="brand-logo"></div>
            </div>
            <div className="social-buttons">
                <span>Поделиться в социальных сетях</span>
                <SocialShareButtonList />
            </div>
        </div>
    );
}

export default HeaderContent;
