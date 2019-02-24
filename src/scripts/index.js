console.log( ( 8 > 54) ? "yes" : "no");
let year = 1964;
year += 10;
console.log(year);

let var1 = "23";
let var2 = 23;

if (var1 == var2) {
    console.log(true);
} else {
    console.log(false);
}

function startCar(carID) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override';
        console.log(message);
    };
    startFn();
    console.log(message);
}
startCar(123);