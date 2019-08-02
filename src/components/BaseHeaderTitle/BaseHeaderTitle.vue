<template>
	<div class="header-title">
		<h5>{{title}}</h5>
	</div>
</template>

<script>
	export default {
		name: 'BaseHeaderTitle',
		props: ['title']
	}
</script>

<style lang="scss">
	@import "@/assets/styles/modules/_variable.scss";

	.header-title{
		margin-bottom: 3rem;
		h5{
			font-size: 2.5rem;
			color: $v-blue;
			margin-bottom: 1rem;
			text-transform: uppercase;
			letter-spacing: 1px;
		}
		&:after{
			content: '';
			border-bottom: 3px solid $v-second-blue;
			width: 200px;
			display: block;
			position: relative;
			margin-left: -7rem;
		}
	}
</style>