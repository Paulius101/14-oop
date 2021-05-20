const Lengvosios = require('./Lengvosios');

class Bmw extends Lengvosios {
    constructor (name, steeringWheelPosition, seatCount, wheelCount) {
        super(name, steeringWheelPosition, seatCount, wheelCount);
    }
}

module.exports = Bmw;