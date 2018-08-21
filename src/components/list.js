import React from 'react';
import Image from './image';
import Content from './content';
import Count from './count';
import Button from './button';


const List = ({ reddits, onHandleAddCount, onHandleMinusCount }) => {
    return(
        <div>
            <ul className="reddit">
                 {reddits.map( reddit => 

                    <li key={reddit.id} className="reddit-listitem">
                        <div className="reddit-count">
                            <Button onClick={() => onHandleAddCount(reddit.id)}>Like</Button>
                            <Count reddit={reddit} />
                            <Button onClick={() => onHandleMinusCount(reddit.id)}>Dislike</Button>
                        </div>
                        <Image reddit={reddit} />
                        <Content reddit={reddit} />
                    </li>
                 )}
            </ul>
        </div>
    );
}

export default List;