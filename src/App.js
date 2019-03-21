import React, { Component } from 'react';
import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div style={{ width: '500px', margin: '0 auto' }}>
        <Tabs>
          <div
            style={{
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              padding: '50px'
            }}
            label="Cats"
          >
            <ol>
              <li>Maincoon</li>
              <li>Exotic</li>
              <li>Ragdoll</li>
            </ol>
          </div>
          <div
            style={{
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              padding: '50px'
            }}
            label="Dogs"
          >
            <ol>
              <li>Beagle</li>
              <li>Boxer</li>
              <li>Siberian Husky</li>
            </ol>
          </div>
          <div
            style={{
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              padding: '50px'
            }}
            label="Birds"
          >
            <ol>
              <li>Parrot</li>
              <li>Sparrow</li>
              <li>Canary</li>
            </ol>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
