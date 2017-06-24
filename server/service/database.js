
const low      = require( 'lowdb' )
const inMemory = require( 'lowdb/lib/storages/memory' )

exports = module.exports = low( './data.json', {
    storage: inMemory
} )