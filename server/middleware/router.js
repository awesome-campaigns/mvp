
exports = module.exports = (
    bodyParser = 'koa-bodyparser',
    Router     = 'koa-router',
    users      = 'handlers/users/router'
) => ( new Router )
.use( bodyParser( ) )
.use( '/users', users.routes( ) )