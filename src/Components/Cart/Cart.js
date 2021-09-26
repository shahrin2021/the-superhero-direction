import React from 'react';

const Cart = (props) => {

const {carts } = props

let total = 0;

for(const price in carts){
    total = total + price.donate
}

    return (
        <div>
            <h3> Doner : {props.carts.length} </h3>
            <h4>price {total}</h4>
        </div>
    );
};

export default Cart;