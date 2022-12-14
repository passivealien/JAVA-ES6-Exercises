let course = {
    name: 'ES6 in Practice',
    _price: 99,
    currency: '€',
    get price() {
        return `${this._price}${this.currency}`;
    }
    };

    let revocableDiscount = Proxy.revocable( course, {
    get: function( target, key ) {
        if ( key === 'price' ) {
                let newPrice = target._price * 0.1;
                return `${newPrice}${target.currency}`;
            }
            return target[ key ];
        }
    }
    )
    let discountedCourse = revocableDiscount.proxy;

    discountedCourse.price
    course.price

    let delay = 300000;
    setTimeout( () => {
    this.revocableDiscount.revoke();
    }, delay );

    console.log(discountedCourse.price)
    console.log(discountedCourse.price)
