const marker = require('@ajar/marker');
// const spaceCat = require('./spaceCat');
// marker.info('ships',spaceCat.shipsCount)

const slugger = (...args)=> {
    return args.join(' ').split(' ').join('-')
}

module.exports = slugger;

