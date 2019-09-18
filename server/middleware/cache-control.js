module.exports = ({ cache }) => (req, res, next) => {
  const cacheTTL = cache.getTtl(req.url) || cache.getTtl(req.query.__index);

  if (cacheTTL) {
    const cacheFor = Math.floor((cacheTTL - Date.now()) / 1000);

    // control header for browsers to cache the contents
    res.setHeader('Cache-Control', `max-age=${cacheFor}`);

    // control header for nginx to cache the page
    res.setHeader('X-Accel-Expires', `${cacheFor}`);
  }

  next();
};
