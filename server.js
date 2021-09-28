'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}
// const fastify = require('fastify')({
//   logger: true
// })

// fastify.register(require('./db'))
// fastify.register(require('./router'))

// fastify.listen(3000, function (err, address) {
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
//   // Server is now listening on ${address}
// })