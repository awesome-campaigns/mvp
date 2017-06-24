
exports = module.exports = (
    db = 'service/database'
) => async( {
    response
}, next ) => {
    response.body = await db.users.insert( { name: 'gabi' } )

    await next( )
}
