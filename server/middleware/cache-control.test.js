import cacheControl from './cache-control';

const next = jest.fn();
const response = {
  setHeader: jest.fn(),
};

beforeEach(() => response.setHeader.mockClear());

test('no cache control header is set if the path is not in the store', () => {
  const request = { url: 'sample-url', query: { path: 'sample-path' } };

  const cache = {
    getTtl: () => undefined,
  };

  cacheControl({ cache, defaultTTL: 100 })(request, response, next);
  expect(response.setHeader).not.toHaveBeenCalled();
});

test('cache control header is set in seconds based on the ttl in the cache store', () => {
  const request = { url: 'sample-url' };

  const cache = {
    getTtl: () => Date.now() + 120100, // 120 seconds into the future with an extra 50 ms
  };

  cacheControl({ cache, defaultTTL: 100 })(request, response, next);

  expect(response.setHeader).toHaveBeenCalledWith('X-Accel-Expires', '120');

  expect(response.setHeader).toHaveBeenCalledWith(
    'Cache-Control',
    'max-age=120'
  );
});

test('cache control header is set path queries as well', () => {
  const cache = {
    getTtl: () => Date.now() + 120000, // 120 seconds into the future
  };

  const queryRequest = {
    query: {
      path: 'some-query-path',
    },
  };

  cacheControl({ cache, defaultTTL: 100 })(queryRequest, response, next);

  expect(response.setHeader).toHaveBeenCalledWith('X-Accel-Expires', '120');

  expect(response.setHeader).toHaveBeenCalledWith(
    'Cache-Control',
    'max-age=120'
  );
});
