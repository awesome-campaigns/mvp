
exports = module.exports = (
    DataStore = 'nedb'
) => new DataStore( {
    autoload:      true,
    filename:      '../database/users.db',
    timeStampData: true
} )