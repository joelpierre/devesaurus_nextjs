const env = process.env.NODE_ENV || 'development';
const dev = env === 'development' || env === 'test';

module.exports = ({ cache, defaultTTL }) => (req, res, next) => {
  const cacheTTL = cache.getTtl(req.url) || cache.getTtl(req.query.__index) || defaultTTL;

  if (cacheTTL) {
    const cacheFor = Math.floor((cacheTTL - Date.now()) / 1000);

    // control header for browsers to cache the contents
    res.setHeader("Cache-Control", `max-age=${cacheFor}`);

    // control header for nginx to cache the page
    res.setHeader("X-Accel-Expires", `${cacheFor}`);

    // If we're running locally we set vary: * to avoid a safari bug
    // where non-cacheable assets are being cached even when cache-control
    // is set to no-store.
    if (dev) {
      res.set({
        'Vary': '*'
      });
    }
  }

  next();
};
