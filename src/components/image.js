import React from 'react';

const Image = ({reddit}) => {
    return(
        <div className="reddit-image">
            <img src={reddit.image} />
        </div>
    );
}

export default Image;