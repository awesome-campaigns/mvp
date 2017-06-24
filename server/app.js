
exports = module.exports = (
    Koa    = 'koa',
    static = 'koa-static',
    router = 'middleware/router'
) => ( new Koa( ) )
.use( static( '../client/dist' ) )
.use( router.routes( ) )
