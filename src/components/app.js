import React, { Component } from 'react';
import { reddits } from '../static-data';

import List from './list';


class App extends Component {
  state = {
      count: reddits.map( reddit => reddit.likeCount)
  };

  onHandleAddCount = id => {
      this.setState({count: reddits.map( reddit => reddit.likeCount)[id] ++ })
  }

  render() {
    console.log(this.state.count)
    return (
      <div>
        <List 
            reddits={reddits} 
            onHandleAddCount={() => this.onHandleAddCount(1)}
            count={this.state.count}
        />
      </div>
    );
  }
}

export default App;