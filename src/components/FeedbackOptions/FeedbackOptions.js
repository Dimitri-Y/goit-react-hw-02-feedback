import React, { Component, PropTypes } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={css.feedbackList}>
        {options.map(option => (
          <li key={option} className={css.feedbackItem}>
            <button name={option} type="button" onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default FeedbackOptions;
