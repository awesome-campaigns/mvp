
exports = module.exports = (
    Router = 'koa-router',
    users  = 'handlers/users/router'
) => ( new Router )
.use( '/users', users.routes( ) )