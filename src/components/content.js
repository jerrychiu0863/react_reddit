import React from 'react';
import Time from './time';

const Content = ({reddit}) => {
    return(
        <div className="reddit-content">
            <div>
                <a href={reddit.url}>{reddit.title.main}
                </a>
                {' '}
                {reddit.title.sub}
            </div>
            <div>
                Submitted <Time time={reddit.time} /> by {reddit.author}
            </div>
            <div className="reddit-button">
                <p>{reddit.comment} comment</p>
                <p>share</p>
                <p>save</p>
                <p>hide</p>
                <p>report</p>
                <p>pocket</p>
            </div>
        </div>        
    );
}

export default Content;