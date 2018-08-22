import React from 'react';
import PropTypes from 'prop-types';

const Image = ({reddit}) => {
    return(
        <div className="reddit-image">
            <img src={reddit.image} />
        </div>
    );
}

Image.propTypes = {
    reddit: PropTypes.object.isRequired
}

export default Image;