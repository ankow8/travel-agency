import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = (props) => (

  <Row>
    {pricing.map((option) => (
      <Col md={4} key={option.id}>
        <OrderOption
          {...option}
          currentvalue = {props.options[option.id]}
          setOrderOption = {props.setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary
        options = {props.options}
        tripCost = {props.tripCost}
      />
    </Col>
  </Row>

);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
