import React, { Component } from 'react';
import { reddits } from '../static-data';

import List from './list';


class App extends Component {
  state = {
      reddits: []
  };

  componentDidMount() {
      this.setState({
          reddits
      });
  }

  onHandleClickPlus = redditId => {
      const updateReddits = this.state.reddits.map( reddit => {
          if(reddit.id === redditId) {
              return Object.assign({}, reddit, { likeCount: reddit.likeCount + 1})
          } else {
              return reddit
          }
      });
      console.log(`clicked ${redditId}`);
      this.setState({reddits: updateReddits})
  }
  

  render() {
    
    let {reddits} = this.state;
      console.log({reddits})
    return (
      <div>
        <List 
            reddits={reddits}
            onHandleAddCount={this.onHandleClickPlus}
        />
      </div>
    );
  }
}

export default App;