var cart = 0;

    function addToCart(cost) {
        this.cart = this.cart + cost;
        document.getElementById("myCart").innerHTML = "$" + this.cart.toFixed(2);
        console.log(this.cart);
    } // end addToCart function
        