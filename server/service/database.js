
exports = module.exports = (
    promised = 'nedb-promise',
    users    = 'models/users'
) => ( {
    users: promised.fromInstance( users )
} )
