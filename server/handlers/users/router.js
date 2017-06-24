
exports = module.exports = (
    Router   = 'koa-router',
    getUsers = 'handlers/users/get',
    putUser  = 'handlers/users/put'
) => ( new Router )
.get( '/', getUsers )
.put( '/', putUser )
