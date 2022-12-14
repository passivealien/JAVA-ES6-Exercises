// Determine the values logged to the console without
// running the code. Instead of just writing down the values, formulate your thought process and explain to yourself how the code runs
// line by line.

let errorDemo = function *() {
    yield 1;
    throw 'Yield 2 is commented, it is unreachable';
    //yield 2; // unreachable code
    }
    let it = errorDemo();
    // Execute one statement at a time to avoid
    // skipping lines after the first thrown error.
    console.log( it.next() );
    console.log( it.next() );
    console.log( [...errorDemo()] );
    for ( let element of errorDemo() ) {
        console.log( element );
   }
