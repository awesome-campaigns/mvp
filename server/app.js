
const Koa       = require( 'koa' )
const koaStatic = require( 'koa-static' )

new Koa( )
.use( koaStatic( '../client/dist' ) )
.listen( 1337 )