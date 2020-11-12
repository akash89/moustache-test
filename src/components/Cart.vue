<template>
    <div class="cart-wrapper" v-show="visibilityCart">
        <div class="cart">
            <CartItem
                v-for="(item, index) in cartItemsToDisplay"
                v-bind:item="item"
                v-bind:index="index"
                v-bind:key="index">
            </CartItem>
        </div>
    </div>
</template>

<script>
import CartItem from '../components/CartItem';
import { mapGetters } from 'vuex';

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    computed: {
        ...mapGetters(['cartItems','visibilityCart']),
        cartItemsToDisplay: function() {
            let cartItems = this.cartItems;

            let id = null;
            let toDisplay = {};

            for (let i = 0; i < cartItems.length; i++) {
                id = cartItems[i].id + '_' + cartItems[i].size;

                if (toDisplay[id] !== undefined) {
                    toDisplay[id].quantity += 1;
                }
                else {
                    toDisplay[id] = {
                        title: cartItems[i].title,
                        price: cartItems[i].price,
                        quantity: 1,
                        size: cartItems[i].size,
                        image: cartItems[i].image
                    }
                }
            }

            return toDisplay;
        }
    }
}
</script>

<style scoped>
.cart-wrapper {
    position: absolute;
    top: 30px;
    width: 100%;
    background: transparent;
}
.cart {
    border: 1px solid #cccccc;
    background: white;
    margin: 0 auto;
    padding: 15px;
}

@media (min-width: 768px) {
    .cart-wrapper {
        width: 300px;
    }
}
</style>