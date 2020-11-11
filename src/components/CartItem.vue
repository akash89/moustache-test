<template>
    <div class="cart-item">
        <img class="item-image" :src="require(`@/assets/${item.image}`)"/>
        <div class="item-details">
            <h6 class="item-title">{{ item.title }}</h6>
            <h6 class="item-price"><span>{{ item.quantity }}</span>x<span class="price">{{ item.price }}</span></h6>
            <label class="item-size">Size: <span>{{ item.size }}</span></label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: ['item'],
    computed: {
        imageSrc: function() {
            let src = '@/assets/' + this.item.image;
            console.log(src);
            return src;
        } 
    }
}
</script>

<style scoped>
.cart-item {
    display: flex;
    margin-bottom: 20px;
}
.item-image {
    display: block;
    width: 100px;
}
.item-title {
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 15px;
}
.item-price {
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 15px;
}
.price {
    margin-left: 6px;
    font-weight: 600;
}
.item-size {
    font-weight: 300;
}
</style>