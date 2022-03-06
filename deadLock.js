// const bar = () => console.log('bar')
// // console.log(bar)
// const baz = () => console.log('baz')
// // console.log(baz)
// const foo = () => {
//   console.log('foo')
//   bar()
//   baz()
// }

// foo()
// function carp(x,y) {
//     return x*y;
// }
// function psq(x) {
//     var s = carp(x,x);
//     console.log(s);
// }
// psq(5);
// function foo() {
//     throw new Error ('Bu noktada Chrome Stack trace akışını ekranda gösterecek');    
// }
// function bar() {
//     foo();    
// }
// function start() {
//     bar();
// }
// start();

// console.log(start);
const iterations = 50;
const multiplier = 1000000000;

function calculatePrimes() {
    var primes = [];
    for (var i = 0; i < iterations; i++) {
        var candidate = i * (multiplier * Math.random());
        var isPrime = true;
        for (var c = 2; c<= Math.sqrt(candidate); ++c) {
            if (candidate % c === 0) {
                //not prime
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            primes.push(candidate);
        }
    }
    return primes;
}

let val = 0;
let num = 0;
let stepCount = 0;
function deadLock() {
    while (val === 0) {
        num++;
        calculatePrimes();
        if (num >= 50) {
            console.log("deadLock metodu tamamlandı");
            break;
        }
        // stepCount++;
        // if (stepCount === 10) {
        //     setTimeout(function (){
        //         stepCount = 0;
        //         deadLock();
        //     }, 0);
        //     break;
        }
    }
    console.log("aktif deadLock metodu Call Stack'ten çıkartılacak");


    function sayHello () {
        alert ("Hello")
    }