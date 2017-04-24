/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

//Funcion que valida token enviado en header
exports.validatorToken = function (req, res, next) {
    //Si el token es invalo retorna un error
    if(req.headers.token != "prueba_token"){
        return res.status(403).send({
            message: 'Invalid Token'
        })
    };

    //Si es valido continua al siguiente middleware
    next();
}