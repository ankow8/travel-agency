import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import {promoPrice} from '../../../utils/promoPrice';

const OrderSummary = (props) => (

  <div>
    <h2 className={styles.component}>
      Price from: <strong>{promoPrice(calculateTotal(props.tripCost, props.options), 20)}</strong>
    </h2>
    <h3 className={styles.grey_component}>
      Standard price: <strong>{formatPrice(calculateTotal(props.tripCost, props.options))}</strong>
      {console.log('calculate:', calculateTotal(props.tripCost, props.options))}
    </h3>
  </div>

);

OrderSummary.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderSummary;
