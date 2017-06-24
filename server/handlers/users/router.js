
exports = module.exports = (
    Router     = 'koa-router',
    getUsers   = 'handlers/users/get',
    login      = 'handlers/users/login',
    putUser    = 'handlers/users/put'
) => ( new Router )
.get(  '/',      getUsers )
.post( '/login', login )
.put(  '/',      putUser )
