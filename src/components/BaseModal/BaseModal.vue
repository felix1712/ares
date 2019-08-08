<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container transparent">
					<a class="close-button" @click="$emit('close')">&times;</a>
					<div class="modal-header">
						<slot name="header">
						</slot>
					</div>

					<div class="modal-body" v-if="this.$slots.body">
						<slot name="body">
						</slot>
					</div>

					<div class="modal-footer">
						<slot name="footer">
						</slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'BaseModal',
	props: {
	}
};
</script>

<style lang="scss">
	@import "@/assets/styles/modules/_variable.scss";

	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left:0;
		width: 100%;
		height: 100%;
		background-color: rgba($v-grey, .8);
		display: table;
		transition: opacity .3s ease;

		.modal-wrapper {
			display: table-cell;
			vertical-align: middle;

			.modal-container {
				min-width: 1px;
				width: 90%;
				margin: 0px auto;
				padding: 15px;
				border-radius: 2px;
				background: $v-white;
				box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
				transition: all .3s ease;
				border-radius: 20px;
				
				&.transparent{	
					background: transparent;
					box-shadow: none;

					.modal-header{
						text-align: center;
					}
				}

				.close-button{
					color: $v-blue;
					border-radius: 100%;
					padding: 0 9px 3px 9px;
					font-size: 5rem;
					position: relative;
					left: 75%;
					top: 5vh;
					// left: 55%;
					// top: 1.2rem;
				}

				.modal-header{
					margin-top: 5px;
					color: $v-black;
					font-weight: bold;
					padding: 0 10px;

					img{
						width: 100%;
						height: auto;
						vertical-align: middle;
						max-width: 15rem;
					}
				}

				.modal-body {
					margin: 20px 0;
				}
				.modal-footer{
					padding: 0 10px;
				}
			}

			&.modal-period{
				bottom: 0;
				position: fixed;
				width: 100%;

				.modal-container{
					width: auto;
					padding: 0px;
					border-bottom-left-radius: 0px;
					border-bottom-right-radius: 0px;

					.modal-header{
						padding: 1rem 0;
						border-bottom: 1px solid $v-grey;
					}
					.modal-body {
						margin: 0;
						padding: 20px 0;
					}
					.close-button{
						color: $v-grey;
						padding: 0 10px;
						font-size: 2rem;
						float: right;
						border: none;
						position: relative;
						left: 0;
						top: .3rem;
						font-weight: 300;
					}
				}
			}
		}
	}

	// modal transition style with vue
	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>