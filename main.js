//declare the variable kelvin and assign it a value of 293
const kelvin = 293;

//convert kelvin to celsius
const celsius = kelvin - 273;

//convert kelvin to celsius and round it down
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);

//Newton conversions

let newton = Math.floor(celsius*(33/100));
console.log(`The temperature is ${newton} in Newtons.`);
