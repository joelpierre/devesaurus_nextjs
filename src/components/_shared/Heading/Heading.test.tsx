import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';


import {  findByTestAttr, matchSnapshot } from '../../../utils/test';

import Heading from './Heading';

const defaultProps = {
  children: 'heading text',
  priority: '1',
};

/**
 * Factory function to create a ShallowWrapper for the Heading component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Heading {...setupProps} />);
};

describe('<Heading/>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the Heading Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-heading');
    expect(component.length).toBe(1);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
