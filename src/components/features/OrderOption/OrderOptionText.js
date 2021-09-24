import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, setOptionValue}) => (

  <div className={styles.component}>
    <label>
      <input
        type="text"
        className={styles.input}
        value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)}
      >
      </input>
    </label>
  </div>

);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
