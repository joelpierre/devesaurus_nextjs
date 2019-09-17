import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

global.___loader = {
  enqueue: jest.fn(),
};

registerRequireContextHook();
