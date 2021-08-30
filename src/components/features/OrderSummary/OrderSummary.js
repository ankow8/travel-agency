import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const OrderSummary = (props) => (

  <h2 className={styles.component}>
    Total: <strong>{formatPrice(calculateTotal(props.tripCost, props.options))}</strong>
  </h2>

);

OrderSummary.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderSummary;
