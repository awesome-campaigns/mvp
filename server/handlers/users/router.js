
exports = module.exports = (
    Router   = 'koa-router',
    getUsers = 'handlers/users/get'
) => ( new Router )
.get( '/', getUsers )
