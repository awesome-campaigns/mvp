
exports = module.exports = (
    db = 'service/database'
) => async( {
    response
}, next ) => {
    response.body = await db.users.find( { } )

    await next( )
}
