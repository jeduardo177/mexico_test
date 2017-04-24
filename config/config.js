/**
 * Created by Jose on 22/04/2017.
 */

//Configura y exporta path del ambiente segun la variable 'NODE_ENV'
module.exports = require('./env/' + process.env.NODE_ENV + '.js');