import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { applyMiddleware, createStore as reduxCreateStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../store/rootReducer';

/**
 * Create a MockStore for testing
 */
export const mockStore = () => {
  const mockMiddleware = applyMiddleware(thunk);
  return reduxCreateStore(rootReducer, mockMiddleware);
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of the data-test attribute.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (
  wrapper: ShallowWrapper | ReactWrapper,
  val: string
) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Match Snapshot util function
 * @param wrapper
 */
export const matchSnapshot = (wrapper: ShallowWrapper | ReactWrapper) => {
  return expect(wrapper).toMatchSnapshot();
};
