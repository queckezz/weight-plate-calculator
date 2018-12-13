const withOffline = require('next-offline')

module.exports = withOffline({
  workboxOpts: {
    swDest: 'static/service-worker.js'
  }
})
