import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, matchSnapshot } from '../../../utils/test';

import PressPack from './PressPack';

const defaultProps = {
  module: {
    brand_zip_file: {
      wordpress_id: 588,
      url: {
        wordpress_id: 588,
        source_url:
          'http://pixeltwist.test/wp-content/uploads/2019/08/Logo.zip',
      },
    },
    image: {
      wordpress_id: 580,
      alt_text: '',
      id: 'caca0077-86c2-55cf-9f48-37de2a73dd22',
      source_url: '/08/459366921_medium.jpg',
      media_type: 'image',
      media_details: {
        width: 2227,
        height: 1348,
      },
    },
  },
};

/**
 * Factory function to create a ShallowWrapper for the PressPack component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PressPack {...setupProps} />);
};

describe('<PressPack/>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the PressPack Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-press-pack');
    expect(component.length).toBe(1);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
