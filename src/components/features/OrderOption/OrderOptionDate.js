import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // nie dzialaja style
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';

const OrderOptionDate = () => {

  const [date, handleDateSelect, handleDateChange] = useState(new Date());

  return (
    <div className={styles.component}>
      <DatePicker
        //className={react-datepicker-wrapper}
        selected={date}
        onSelect={handleDateSelect} //when day is clicked
        onChange={handleDateChange} //only when value has changed
      />
    </div>
  );
};

export default OrderOptionDate;
