import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generated link to correct adress.', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });
  it('should generated image correct src and alt.', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'Alt Text';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);
    const renderedImageSrc = component.find('.image').prop('src');
    expect(renderedImageSrc).toEqual(expectedSrc);
    const renderedImageAlt = component.find('.image').prop('alt');
    expect(renderedImageAlt).toEqual(expectedAlt);
  });
  it('renders correct props: name, cost and days.', () => {
    const component = shallow(<TripSummary name={'Into the wild'} cost={5800} days={12} />);
    expect(component).toBeTruthy();
  });
  it('should throw error without props', () => {
    expect (() => shallow(<TripSummary />)).toThrow();
  });
});
