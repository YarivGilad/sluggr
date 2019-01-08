const marker = require('@ajar/marker');

let shipsCounter = 3;

exports.countShips = function (){
    return shipsCounter
}

class Alian {
    constructor(){
       marker.info('an alian was born') 
    }
    greet(){
        marker.magenta('we come in peace!!!')
    }
}

module.exports = {
    Alian,
    countShips
}