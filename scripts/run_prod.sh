#!/usr/bin/env bash

set -e

export NODE_ENV='production'

nodemon --ignore 'build/' src/server/server.js
