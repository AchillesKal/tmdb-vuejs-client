'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const apiKey = require('./api_key').ApiKey

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOVIE_DB_API_KEY: apiKey
})
