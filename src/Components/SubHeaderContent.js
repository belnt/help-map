import React from 'react';
import { Select } from 'antd';
import './SubHeaderContent.css';

const SubHeaderContent = (props) => {
    return (
        <div className="sub-header">
            <div className="event">
                <div className="event-primary">{props.event.location}</div>
                <div className="event-details">{props.event.shortDescription}</div>
            </div>
        </div>
    );
}

export default SubHeaderContent;
