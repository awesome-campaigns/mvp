
const { Container, Providers } = require( 'epoxy-di' )

const ioc = new Container( [
    Providers.CurrentDirectory,
    Providers.NodeModules
] )

const app = ioc.create( 'app' )
app.listen( 1337 )
