// //let proxy = new Proxy( target, trapObject );
// class Student {
//     constructor(first, last, scores) {
//         this.firstName = first;
//         this.lastName = last;
//         this.testScores = scores;
//     }
//     get average() {
//         let average = this.testScores.reduce(
//         (a,b) => a + b,0 ) / this.testScores.length;
//         return average;
//     }
// }
// let john = new Student( 'John', 'Dwan', [60, 80, 80] );

// let johnProxy = new Proxy( john, { 
//         get: function( target, key, context ) {
//         console.log( `john[${key}] was accessed.` );
//         // return undefined;
//         }
//     }
// )

// //console.log(johnProxy.getGrade)
// //console.log(johnProxy.testScores)

// let johnMethodProxy = new Proxy( john, {
//         get: function( target, key, context ) {
//             if ( key === 'average' ) {
//             return target.average;
//             }
//         }
//     }
// )

// console.log(johnMethodProxy.firstName)
// console.log(johnMethodProxy.average)

// let factorial = n => n <= 1 ? n : n * factorial( n - 1 );
// let originalFactorial = factorial;
// let numOfCalls = 0;
// factorial = new Proxy( factorial, {
//         apply: function( target, thisValue, args ) {
//             console.log( 'I am called with', args );
//             return Reflect.apply( originalFactorial, thisValue, args );
//         }
//     }
// )

// factorial( 5 ) && numOfCalls;
//==================================================
// let payload = {
//     website: 'zsoltnagy.eu',
//     article: 'Proxies in Practice',
//     viewCount: 15496
// }
// let revocable = Proxy.revocable( payload, {
//     get: function( ...args ) {
//             console.log( 'Proxy' );
//             return Reflect.get( ...args );
//         }
//     }
// )
// //let proxy = revocable.proxy;
// let {proxy, revoke} = Proxy.revocable( payload, {
//     get: function( ...args ) {
//         console.log( 'Proxy' );
//         return Reflect.get( ...args );
//         }
//     }
// )
// console.log(payload.website)
// revocable.revoke()
// console.log(proxy.website)//Cannot perform 'get' on a proxy that has been revoked
// revoke();

//==============================
// fibonacci = n =>
// n <= 1 ? n :
// fibonacci( n - 1 ) + fibonacci( n - 2 );

// console.log(fibonacci( 12 ))
//-============================

let display = () => {
    let fibonacci = n =>
    n <= 1 ? n :
    fibonacci( n - 1 ) + fibonacci( n - 2 );
    let originalFibonacci = fibonacci;
    let fibCount = 0, fib2Count = 0;
    let memoMap = new Map();
    fibonacci = new Proxy( fibonacci, {
            apply: function( target, thisValue, args ) {
            fibCount += 1;
            if ( args[0] === 2 ) {
                fib2Count += 1;
            }
            if ( memoMap.has( args[0] ) ) {
                return memoMap.get( args[0] );
            } else {
                let result = originalFibonacci( ...args );
                memoMap.set( args[0], result );
                return result;
            }
            }
        }
    )
    console.log( 'Result:', fibonacci( 12 ) );
    console.log( 'fibCount', fibCount );
    console.log( 'fib2Count', fib2Count );
    fibonacci = originalFibonacci;
}
export default display