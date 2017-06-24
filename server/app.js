
exports = module.exports = (
    Koa    = 'koa',
    static = 'koa-static'
) => ( new Koa( ) )
.use( static( '../client/dist' ) )
