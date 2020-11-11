const state = {
    cartItems: [
        // {
        //     id: 'prod_1',
        //     title: 'Classic Tee',
        //     price: '$75.00',
        //     size: 'S',
        //     image: 'classic_tee.jpg'
        // },
        // {
        //     id: 'prod_1',
        //     title: 'Classic Tee',
        //     price: '$75.00',
        //     size: 'M',
        //     image: 'classic_tee.jpg'
        // },
        // {
        //     id: 'prod_1',
        //     title: 'Classic Tee',
        //     price: '$75.00',
        //     size: 'S',
        //     image: 'classic_tee.jpg'
        // }
    ],
    visibilityCart: false
}

const getters = {
    cartItems: state => state.cartItems,
    visibilityCart: state => state.visibilityCart
}

const actions = {
    addItemToCart({ commit }, item) {
        commit('addItemToCart', item);
    },
    setCartVisibility({ commit }) { 
        commit('setCartVisibility');
    }
}
    
const mutations = {
    addItemToCart(state, item) {
        state.cartItems.push(item)
    },
    setCartVisibility(state) {
        state.visibilityCart = !state.visibilityCart;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
