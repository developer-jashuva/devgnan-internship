console.log(a); // undefined
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

var a = 10;
let b = 20;
const c = 30;

function test() {
    var x = 100;
    let y = 200;
    const z = 300;

    if (true) {
        var x = 500; // Global-scoped
        let y = 600; // Block-scoped
        const z = 700; // Block-scoped

        console.log(x); // 500
        console.log(y); // 600
        console.log(z); // 700
    }

    console.log(x); // 500
    console.log(y); // 200
    console.log(z); // 300
}

test();