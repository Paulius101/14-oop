const Bmw =  require ('./js/cars/Bmw')
const juodasBmw = new Bmw ('Bmw', 'Left', 5, 4)


const Tesla =  require ('./js/cars/Tesla')
const baltaTesla = new Tesla ('Tesla', 'Left', 5, 4)

const Volvo = require ('./js/cars/Volvo')
const pilkasVolvo = new Volvo ('Volvo', 'Left', 5, 4)

console.log(pilkasVolvo);
pilkasVolvo.turnOnTheEngine()
console.log(pilkasVolvo);