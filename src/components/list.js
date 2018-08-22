import React from "react";
import Image from "./image";
import Content from "./content";
import Count from "./count";
import Button from "./button";
import Header from "./header";

const List = ({
  reddits,
  onHandleAddCount,
  onHandleMinusCount,
  sortByLikeCount
}) => {
  return (
    <div>
      <Header 
        className={'reddit-header'} 
      />
      <ul className="reddit-list">
        {reddits.sort(sortByLikeCount).map(reddit => (
          <li key={reddit.id} className="reddit-listitem">
            <div className="reddit-count">
              <Button
                className={"reddit-vote-btn"}
                onClick={() => onHandleAddCount(reddit.id)}
              >
                <i className="fas fa-arrow-up" />
              </Button>
              <Count 
                reddit={reddit} 
                className={"reddit-count-num"} 
              />
              <Button
                className={"reddit-vote-btn"}
                onClick={() => onHandleMinusCount(reddit.id)}
              >
                <i className="fas fa-arrow-down" />
              </Button>
            </div>
            <Image reddit={reddit} />
            <Content 
                reddit={reddit} 
                comment={reddit.comment} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
