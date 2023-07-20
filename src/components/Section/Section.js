import React, { Component, PropTypes } from 'react';
class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  render() {
    const { title, children } = this.props;
    return (
      <section className="а">
        <h3 className="h">{title}</h3>
        {children}
      </section>
    );
  }
}
export default Section;
