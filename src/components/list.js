import React from 'react';
import Image from './image';
import Content from './content';
import Count from './count';


const List = ({ reddits, onHandleAddCount }) => {
    return(
        <div>
            <ul className="reddit">
                 {reddits.map( reddit => 

                    <li key={reddit.id} className="reddit-listitem">
                        <div className="reddit-count">
                            <button onClick={() => onHandleAddCount(reddit.id)}>up</button>
                            <Count reddit={reddit} />
                            <button>down</button>
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