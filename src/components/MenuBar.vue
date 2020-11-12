<template>
    <div class="menu-bar">
        <div class="menu-bar-container"> 
            <a class="cart-button" v-on:click="showCart" @mouseover="showCart" @mouseleave="setCartVisibility" v-bind:class="{ active: visibilityCart }" type="button">
                <img class="cart-icon" src="../assets/ic_shopping_cart.svg"/>
                <span class="cart-label">My Cart</span>
                <span class="cart-count">( {{ cartItems.length }} )</span>
            </a>
            <Cart />
        </div>
    </div>
</template>

<script>
import Cart from './Cart';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MenuBar',
    components: {
        Cart
    },
    computed: {
        ...mapGetters(['cartItems','visibilityCart'])
    },
    methods: {
        ...mapActions(['setCartVisibility']),
        showCart: function() {
            if (this.cartItems.length > 0) {
                this.setCartVisibility();
            }
        }
    }
}
</script>

<style scoped>
.menu-bar {
    background: #f6f6f6;
    margin: 0;
    margin-top: 15px;
}
.menu-bar-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    position: relative;
}
.cart-button {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 10px;
    background: transparent;
    opacity: 0.4; 
    border: 1px solid transparent;
}
.cart-icon {
    width: 14px;
    margin-right: 6px;
}
.cart-label {
    display: none;
    color: var(--dark-grey);
    font-size: 12px;
    font-weight: 600; 
}
.cart-count {
    color: #222222;
    font-weight: 600;
    font-size: 12px;
}
.active {
    background: white;
    opacity: 1;
    border: 1px solid #cccccc;
    border-bottom: 1px solid transparent;
    z-index: 100;
}

@media (min-width: 768px) {
    .cart-icon {
        display: none;
    }
    .cart-label {
        display: inline-block;
        margin-right: 6px;
    }
}

@media (min-width: 1366px) {
    .menu-bar {
        width: 75%;
        margin: 0 auto;
        margin-top: 15px;
    }
}

</style>