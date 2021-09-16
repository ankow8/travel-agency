import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import styles from '../../../../node_modules/react-datepicker/dist/react-datepicker.css';

const OrderOptionDate = () => {

  const [date, handleDateSelect, handleDateChange] = useState(new Date());

  return (
    <DatePicker
      className={styles}
      selected={date}
      onSelect={handleDateSelect} //when day is clicked
      onChange={handleDateChange} //only when value has changed
    />
  );
};

export default OrderOptionDate;
