import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, matchSnapshot } from '../../../utils/test';

import CtaBanner from './CtaBanner';

const defaultProps = {
  module: {},
};

/**
 * Factory function to create a ShallowWrapper for the CtaBanner component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CtaBanner {...setupProps} />);
};

describe('<CtaBanner/>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the CtaBanner Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-cta-banner');
    expect(component.length).toBe(1);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
