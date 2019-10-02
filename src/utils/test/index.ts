import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import rootReducer from '../../store/rootReducer';
import thunk from 'redux-thunk';

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
