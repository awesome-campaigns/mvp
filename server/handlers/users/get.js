
exports = module.exports = (
    db = 'service/database'
) => async( ctx, next ) => {
    const users = await db.users.find( { } )
    ctx.body = users.map( ( { _id, name } ) => ( { _id, name } ) )

    await next( )
}
