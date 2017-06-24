
exports = module.exports = (
    crypto,
    config
) => ( {
    hash( str ) {
        const { shaSecret } = config
        return crypto
        .createHmac( 'sha256', shaSecret )
        .update( str )
        .digest( )
        .toString( )
    }
} )