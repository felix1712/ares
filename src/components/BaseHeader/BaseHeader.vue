<template>
	<div class="header">
		<div class="banner-header">
			<div class="logo-banner">
				<img src="@/assets/images/main-logo.png">
			</div>
			<div class="menu-list">
				<ul>
					<li>
						<a>
							About
						</a>
					</li>
					<li>
						<a>
							promo & news
						</a>
					</li>
					<li>
						<a>
							property
						</a>
					</li>
					<li>
						<a>
							our sales
						</a>
					</li>
					<li>
						<a>
							location
						</a>
					</li>
					<li>
						<a>
							contact us
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="header-fix">
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'base-header',
	}
</script>

<style lang="scss">
	@import "@/assets/styles/modules/_variable.scss";
	.header{
		margin: 0 100px;
		position: relative;
		z-index: 2;
		ul{
			li{
				list-style: none;
				a{
					text-transform: uppercase;
					color: $v-white;
					font-weight: 400;
				}
			}
		}
		.banner-header{
			.logo-banner{
				position: absolute;
				top: 5vh;
				img{
					height: 100px;
					width: 100px;
				}
			}
			.menu-list{
				position: absolute;
				top: 90vh;
		    right: 50%;
		    left: auto;
		    -webkit-transform: translateX(60%);
		    -ms-transform: translateX(60%);
		    transform: translateX(60%);
		    bottom: 25px;
		    width: 100%;
		    z-index: 2;
		    -webkit-transition-delay: 1.5s;
		    transition-delay: 1.5s;
		    padding: 0 1rem;
		    display: block;
		    max-width: 75rem;
		    margin-left: auto;
		    margin-right: auto;

				ul{
					float: right;

					li{
						display: inline-block;
						margin-right: 20px;
						color: $v-white;
						a{
							font-size: 12px;
							letter-spacing: 1.75px;
						}
					}
				}
			}
		}
	}
</style>