<template>
    <div class="product-details">
        <img class="image" src="../assets/classic_tee.jpg"/>
        <div class="details">
            <h2 class="title">{{ productDetails[id].title }}</h2>
            <h4 class="price">{{ productDetails[id].price }}</h4>
            <p class="description">{{ productDetails[id].description }}</p>
            <div>
                <label class="size-label-container">
                    <span class="size-label">SIZE</span>
                    <span class="asterisk" v-show="!size">*</span>
                    <span class="size">{{ size }}</span>
                </label>
                <div class="size-button-container">
                    <button class="size-btn" v-bind:class="{ active: smalledSelected }" v-on:click="setSize('S')" type="button">S</button>
                    <button class="size-btn" v-bind:class="{ active: mediumSelected }" v-on:click="setSize('M')" type="button">M</button>
                    <button class="size-btn" v-bind:class="{ active: largeSelected }" v-on:click="setSize('L')" type="button">L</button>
                </div>
            </div>
            <div class="warning-container" v-show="warning"><span class="warning">Please select a size above.</span></div>
            <button class="add-to-cart" v-on:click="addToCart" type="button">ADD TO CART</button>
        </div>
    </div>
</template>

<script>
import store from "@/store.js";
import { mapActions } from 'vuex';

export default {
    name: 'ProductDetails',
    props: ['id'],
    data() {
        return {
            productDetails: store.productDetails,
            size: null,
            warning: false
        }
    },
    methods: {
        ...mapActions(['addItemToCart']),
        setSize: function(size) {
            if (this.size === size) {
                this.size = null;
            }
            else {
                this.size = size;
            }

            this.warning = false;
        },
        addToCart: function() {
            let id = this.id;
            let size = this.size;

            if (size === null) {
                this.warning = true;
            }
            else {
                let item = {
                    id,
                    title: store.productDetails[id].title,
                    price: store.productDetails[id].price,
                    image: store.productDetails[id].image,
                    size: size
                };
                this.addItemToCart(item);
                console.log(item);  
            }
        }
    },
    computed: {
        smalledSelected: function() {
            return (this.size === 'S') ? true : false;
        },
        mediumSelected: function() {
            return (this.size === 'M') ? true : false;
        },
        largeSelected: function() {
            return (this.size === 'L') ? true : false;
        }
    }
}
</script>

<style scoped>
.product-details {
    padding: 15px 0;
    width: 90%;
    margin: 0 auto;
}
.image {
    display: block;
    width: 100%;
    margin-bottom: 20px;
}
.title {
    color: var(--dark-grey);
    font-weight: 400;
    margin-bottom: 20px;
}
.price {
    font-weight: 900;
    color: var(--dark-grey);
    margin-bottom: 20px;
}
.description {
    color: var(--light-grey);
    margin-bottom: 20px;
    line-height: 24px;
}
.size-label-container {
    display: flex;
    flex-direction: row;
}
label {
    font-size: 14px;
    font-weight: 600;
    display: block;
    margin-bottom: 10px;
}
label span {
    display: block;
}
.size-label {
    color: var(--light-grey);
    letter-spacing: 1px;
}
.asterisk {
    color: #C90000;
}
.size {
    color: var(--dark-grey);
    margin-left: 10px;
}
.size-button-container {
    display: flex;
    flex-direction: row;
}
.size-btn {
    border: 2px solid #cccccc;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light-grey);
    width: 40px;
    height: 40px;
    margin-right: 6px;
    font-size: 14px;
    margin-bottom: 20px;
}
.add-to-cart {
    border: 3px solid var(--dark-grey);
    padding: 10px 20px;
    color: var(--dark-grey);
    background: transparent;
    font-weight: 600;
    font-size: 16px;
}
.add-to-cart:hover {
    background: var(--dark-grey);
    color: white;
}
.active {
    border: 2px solid var(--dark-grey);
    color: var(--dark-grey);
}
.warning-container {
    margin-bottom: 20px;
}
.warning {
    background: #FAE7EC;
    padding: 10px 12px;
    font-size: 14px;
    color: var(--dark-grey);
}

@media (min-width: 768px) {
    .product-details {
        width: 650px;
    }
    .image {
        width: 350px;
        display: inline-block;
    }
    .details {
        display:inline-block;
        width: 300px;
        vertical-align: top;
    }
}
</style>
