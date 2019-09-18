#!/usr/bin/env bash

set -e

export NODE_ENV='development'

nodemon  --config nodemon.json --exec node --icu-data-dir=node_modules/full-icu --max_old_space_size=8192 -r ts-node/register -r esm --ignore 'build/' server/server.ts"
