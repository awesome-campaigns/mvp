
exports = module.exports = (
    auth = 'service/auth',
    db   = 'service/database'
) => async( ctx, next ) => {
    const { name, password } = ctx.request.body
    if( ! name || ! password ) {
        ctx.throw( 'username or password invalid', 422 )
    }

    const exists = await db.users.findOne( { name } )
    if( exists ) {
        ctx.throw( 'username already exists', 409 )
    }

    const { _id, name: username } = await db.users.insert( {
        name,
        password: auth.hash( password )
    } )

    ctx.body = { _id, username }

    await next( )
}
