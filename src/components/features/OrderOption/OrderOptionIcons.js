import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({required, values, setOptionValue}) => (

  <div className={styles.icon}>
    {required ? '' : (
      <div
        value=''
        className={styles.icon}
        onClick={() => setOptionValue('')}
      >
        <Icon
          name='times-circle'
        />
        none
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon
          name={value.icon}
        />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>

);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
