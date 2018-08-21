import React from 'react';

const Count = ({reddit}) => {
    return(
        <span>
            {reddit.likeCount}
        </span>
    );
    
}

export default Count;