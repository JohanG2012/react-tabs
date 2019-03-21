import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import Wrapper from './Wrapper';
import TabsList from './TabsList';

const propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }
  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;
    return (
      <Wrapper>
        <TabsList>
          {children.map(child => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </TabsList>
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined;
          return child;
        })}
      </Wrapper>
    );
  }
}

Tabs.propTypes = propTypes;
export default Tabs;
