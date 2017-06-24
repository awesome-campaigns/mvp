
exports = module.exports = ( ) => async( {
    response
}, next ) => {
    response.body = [
        'gabi',
        'tony'
    ]

    await next( )
}
