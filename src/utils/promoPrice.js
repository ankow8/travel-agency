import {formatPrice} from './formatPrice';

export const promoPrice = (priceArg, discountArg) => {

  if(!priceArg || typeof priceArg != 'number' || priceArg < 0 || !discountArg || typeof discountArg != 'number' || discountArg < 0 || discountArg > 100){
    return null;
  } else if(typeof priceArg === 'string' && priceArg.includes('$') && discountArg > 0 && discountArg < 100){
    priceArg = priceArg.slice(1).replace(',', '');
    return formatPrice(priceArg - (priceArg * discountArg * ( 1 / 100)));
  } else {
    return formatPrice(priceArg - (priceArg * discountArg * ( 1 / 100)));
  }
};
