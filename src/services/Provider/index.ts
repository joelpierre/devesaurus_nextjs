import { isNonEmptyString } from '../../utils';

const MATCH_ARRAY_INDEX = /\[(\d)\]/; // regex to match on array index accessor e.g 'a[2]'

export default class Provider<C, K = string> {
  readonly providerName: string;
  private data: C;

  constructor(providerName: string, data?: C) {
    this.providerName = providerName;
    // tslint:disable-next-line:no-object-literal-type-assertion
    this.data = data !== undefined ? data : {} as C;
  }

  getData() {
    return this.data;
  }

  hydrate(provider: Provider<C, K>) {
    this.data = provider.data;
    return this;
  }

  getValue(key: K & string, alternateValue?: any) {
    const value = this.search(key);
    const isValueUndefined = typeof value === 'undefined';

    if (isValueUndefined && arguments.length === 1) {
      console.warn(`No value provided provided for key: ${key} in the ${this.providerName} provider`);
    }

    if (isValueUndefined && typeof alternateValue !== 'undefined') {
      return alternateValue;
    }

    return value;
  }

  setValue(path: K & string, value: any) {
    this.data[path as string] = value;
  }

  private search(key: string) {
    const accessors = key ? key.split('.') : [];

    return accessors.reduce(
      (value, accessor) => {
        const accessorKeys = accessor.split(MATCH_ARRAY_INDEX).filter(isNonEmptyString); // filter out empty keys;

        return accessorKeys.reduce(
          (accessorValue: any, currentKey: string) => {
            // reduce up the accessor accessorKeys to get the value
            // if there is a accessorValue get the value at key
            return accessorValue ? accessorValue[currentKey] : /** @type {undefined} */ accessorValue;
          },
          value);
      },
      this.data);
  }

}
