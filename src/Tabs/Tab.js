import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabItem from './TabItem';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label }
    } = this;

    let active = false;

    if (activeTab === label) {
      active = true;
    }

    return (
      <TabItem active={active} onClick={onClick}>
        {label}
      </TabItem>
    );
  }
}

export default Tab;
