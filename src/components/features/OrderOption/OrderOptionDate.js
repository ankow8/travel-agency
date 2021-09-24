import React/*, {useState}*/ from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

const OrderOptionDate = ({currentValue, setOptionValue}) => {

  //const [currentValue, setOptionValue] = useState(new Date());

  return (
    <DatePicker
      className={styles.input}
      value={currentValue}
      selected={currentValue}
      //onSelect={handleDateSelect} //when day is clicked
      onChange={setOptionValue} //only when value has changed
    />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
