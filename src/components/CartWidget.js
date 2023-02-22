import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function CartWidget(){
return  <li className="shop-cart">
    <a  href="#"><FontAwesomeIcon icon={faShoppingCart} /></a><span id='cart-counter'>0</span>

</li>
}




