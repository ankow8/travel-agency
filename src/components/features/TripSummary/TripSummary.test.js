import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generated link to correct adress.', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} image={''} name={''} cost={0} days={0} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });
  it('should generated image correct src and alt.', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'Alt Text';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} id={''} cost={0} days={0} tags={[]} />);
    const renderedImageSrc = component.find('img').prop('src');
    expect(renderedImageSrc).toEqual(expectedSrc);
    const renderedImageAlt = component.find('img').prop('alt');
    expect(renderedImageAlt).toEqual(expectedAlt);
  });
  it('renders correct props: name, cost and days.', () => {
    const component = shallow(<TripSummary name={'Into the wild'} cost={5800} days={12} id={''} image={''} tags={[]} />);
    expect(component).toBeTruthy();
  });
  it('should throw error without required props', () => {
    expect (() => shallow(<TripSummary />)).toThrow();
  });
  it('should rendered tags in array.', () => {
    const expectedTags = ['first', 'second', 'third'];
    const component = shallow(<TripSummary tags={expectedTags} id={''} image={''} name={''} cost={0} days={0} />);
    expect(component.find('.tags span').at(0).text()).toEqual('first');
    expect(component.find('.tags span').at(1).text()).toEqual('second');
    expect(component.find('.tags span').at(2).text()).toEqual('third');
  });
  it('if props tags is false or are empty array do not renders div with className tags.', () => {
    const component = shallow(<TripSummary tags={['first', 'second', 'third']} id={''} image={''} name={''} cost={0} days={0} />);
    expect(component.hasClass('tags')).toBe(false);
  });
});
