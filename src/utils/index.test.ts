import { updateObject } from './index';

describe('Testing utils', () => {
  it('should update object with new values', () => {
    const obj: any = {
      joel: 'pierre',
    };
    const newObj: any = {
      joel: 'powell',
    };

    const updatedObj = updateObject(obj, newObj);

    expect(updatedObj).toEqual(newObj);
  });
});
