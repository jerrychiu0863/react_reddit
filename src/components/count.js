import React from 'react';

const Count = ({reddit, className}) => {
    return(
        <span className={className}>
            {reddit.likeCount}
        </span>
    );
    
}

export default Count;