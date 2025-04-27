const car = {
    name: "XDG6557",
    mark: 'FeRarity',
    birth: 2000,
    isBroken: false,
    BeepBeep: function() {
        console.log("Beep-Beep");
    },
}

const carOwner = {
    name: 'Stepanich',
    secondName: 'Rambonenko',
    age: 41,
    cars: [car],
}
console.log(car);
console.log(carOwner);
car.BeepBeep()

const people = [];
people.push('Stepan');
people.push('Pidor');
people.unshift('John');
console.log(people);

const evens = [];
const maxValue = 1000;
for (let i=0;i<=maxValue;i+=2) evens.push(i);
console.log(evens);