
exports = module.exports = (
    db = 'service/database'
) => async( ctx, next ) => {
    ctx.body = await db.users.find( { } )

    await next( )
}
