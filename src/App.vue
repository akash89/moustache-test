<template>
	<div id="app">
		<MenuBar />
		<ProductDetails id="prod_1"/>
	</div>
</template>

<script>
import MenuBar from './components/MenuBar';
import ProductDetails from './components/ProductDetails'

export default {
	name: 'App',
	components: {
		MenuBar,
		ProductDetails
	}
}
</script>

<style>
:root {
    --dark-grey: #222222;
    --light-grey: #888888;
	--border-light-grey: #cccccc;
}
html {
    height: 100%;
    scroll-behavior: smooth;
    margin: 0;
}
body {
    margin: 0;
    height: 100%;
}
#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	position: relative;
}
h1, h2, h3, h4, h5, h6, div, a, i, ul, span, p, body, html, input, textarea, figure {
    margin: 0;
}
button {
    outline: none;
    border: none;
    cursor: pointer;
}
</style>
