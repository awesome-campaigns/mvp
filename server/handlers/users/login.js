
exports = module.exports = (
    auth = 'service/auth',
    db   = 'service/database'
) => async( ctx, next ) => {
    const { name, password } = ctx.request.body
    if( ! name || ! password ) {
        ctx.throw( 'missing username or password', 422 )
    }

    const user = await db.users.findOne( { name } )
    if( ! user ) {
        ctx.throw( 'wrong username or password', 401 )
    }

    if( auth.hash( password ) != user.password ) {
        ctx.throw( 'wrong username or password', 401 )
    }

    ctx.redirect( 'back', '/' )

    await next( )
}
