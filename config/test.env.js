'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')
const apiKey = require('./api_key').ApiKey

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  MOVIE_DB_API_KEY: apiKey
})
