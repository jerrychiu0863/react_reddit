import React from 'react';
import moment from 'moment';

const Time = ({ time }) => {
    
    const timeString = moment(time).fromNow();
    
    return(
        <span className="reddit-content-time">
            {timeString}
        </span>
    );
}

export default Time;