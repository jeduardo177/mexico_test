/**
 * Created by Jose on 22/04/2017.
 */

'use strict';

exports.validatorToken = function (req, res, next) {

    if(req.headers.token != "prueba_token"){
        return res.status(403).send({
            message: 'Invalid Token'
        })
    };

    next();
}