#!/usr/bin/env bash

set -e

export NODE_ENV='production'

npm run build && node -r esm server/server.js
#npm run build && nodemon -r esm server/server.js
