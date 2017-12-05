import $ from 'jquery'
import Util from './util'

var cart = 0;

    function addToCart(cost) {
        this.cart = this.cart + cost;
        document.getElementById(myCart).innerHTML = "$" + this.cart;
        console.log(this.cart);
    } // end addToCart function
        