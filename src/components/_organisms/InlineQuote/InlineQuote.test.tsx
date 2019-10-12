import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, matchSnapshot } from '../../../utils/test';

import InlineQuote from './InlineQuote';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the InlineQuote component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<InlineQuote {...setupProps} />);
};

describe('<InlineQuote/>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the InlineQuote Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-inline-quote');
    expect(component.length).toBe(1);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
