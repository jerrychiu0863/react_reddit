import React from 'react';


const List = ({ reddits, onHandleAddCount}) => {
    return(
        <div>
            <ul className="reddit">
                 {reddits.map( reddit => 

                    <li key={reddit.id} className="reddit-item">
                        <div className="reddit-count">
                            <button onClick={onHandleAddCount}>up</button>
                            {reddit.likeCount}
                            <button>down</button>
                        </div>
                        <div className="reddit-image">
                            <img src={reddit.image} />
                        </div>
                        <div className="reddit-content">
                            <div>
                                <a href={reddit.url}>{reddit.title.main}
                                </a>
                                {reddit.title.sub}
                            </div>
                            <div>
                                Submitted {reddit.time} by {reddit.author}
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
                    </li>
                 )}
            </ul>
        </div>
    );
}

export default List;