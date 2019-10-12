import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, matchSnapshot } from '../../../utils/test';

import ImageBlock from './ImageBlock';

const defaultProps = {
  module: {},
};

/**
 * Factory function to create a ShallowWrapper for the ImageBlock component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ImageBlock {...setupProps} />);
};

describe('<ImageBlock/>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the ImageBlock Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-');
    expect(component.length).toBe(1);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
