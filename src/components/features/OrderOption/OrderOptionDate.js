import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = () => {

  const [date, handleDateSelect, handleDateChange] = useState(new Date());

  return (
    <DatePicker
      className={styles.input}
      selected={date}
      onSelect={handleDateSelect} //when day is clicked
      onChange={handleDateChange} //only when value has changed
    />
  );
};

export default OrderOptionDate;
