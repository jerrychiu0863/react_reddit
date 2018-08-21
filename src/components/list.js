import React from 'react';
import Image from './image';
import Content from './content';
import Count from './count';
import Button from './button';


const List = ({ reddits, onHandleAddCount, onHandleMinusCount}) => {
    return(
        <div>
            <ul className="reddit">
                 {reddits.map( reddit => 

                    <li key={reddit.id} className="reddit-listitem">
                        <div className="reddit-count">
                            <Button 
                                className={'reddit-vote-btn'}
                                onClick={() => onHandleAddCount(reddit.id)}>
                                <i className="fas fa-arrow-up"></i>
                            </Button>
                            <Count 
                                reddit={reddit} 
                                className={'reddit-count-num'}
                            />
                            <Button 
                                className={'reddit-vote-btn'}
                                onClick={() => onHandleMinusCount(reddit.id)}><i className="fas fa-arrow-down"></i>
                            </Button>
                        </div>
                        <Image reddit={reddit} />
                        <Content 
                            reddit={reddit}
                            comment={reddit.comment}
                        />
                    </li>
                 )}
            </ul>
        </div>
    );
}

export default List;