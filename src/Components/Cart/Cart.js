import React from 'react';
import './Cart.css'

const Cart = (props) => {

const {carts} = props

let total = 0;
// total donation
for(const price of carts){

    total = total + price.donate;
}

    return (
        <div>
            <div className="cart-area">
            <h3> Doner : {props.carts.length} </h3>
            <h5>Total Donation:{total}</h5>
            </div>
        </div>
    );
};

export default Cart;