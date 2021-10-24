import { formatTime } from './formatTime';
import { promoPrice } from './promoPrice';


describe('utils', () => {
  describe('formatTime', () => {
    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });
    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });
    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });
    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });
  });
  describe('promoPrice', () => {
    it('should return null if there is no arg or only one arg', () => {
      expect(promoPrice()).toBe(null);
      expect(promoPrice(160)).toBe(null);
    });
    it('should return null if arg is not a number', () => {
      expect(promoPrice('20', 30)).toBe(null);
      expect(promoPrice(() => {})).toBe(null);
    });
    it('should return null if first arg is lower than zero and second arg is below than 0 or above than 100', () => {
      expect(promoPrice('$1', -20)).toBe(null);
      expect(promoPrice('$32,000', -5)).toBe(null);
      expect(promoPrice('$32,000', 0)).toBe(null);
      expect(promoPrice('$32,000', 120)).toBe(null);
    });
    it('should return correct format if arg is proper', () => {
      expect(promoPrice('$10,000', 20)).toBe('$8,000');
      expect(promoPrice('$38,790', 10)).toBe('$34,911');
      expect(promoPrice('$120,000', 95)).toBe('$6,000');
      expect(promoPrice('$3,600', 15)).toBe('$3,060');
    });
  });
});
