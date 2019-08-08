<template>
	<div class="header" :scroll="handleScroll">
		<div class="banner-header" :class="{'unpinned': scrolled}" v-if="!showFixedOnly">
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
		<div class="header-fix" :class="{'is-show': !scrolled}">
			<img src="@/assets/images/logo-second.png">
			<div class="menu-list">
				<ul>
					<li>
						<a class="active">
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
			<div class="menu-contact-info">
				<p>+62 822 1024 4875</p>
				<small>ares-sarana@hotmail.com</small>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'base-header',
		data() {
			return {
				limitHeader: 800,
				lastPosition: 0,
				scrolled: false,
			};
		},
		methods: {
			handleScroll() {
				if (this.lastPosition > this.limitHeader) {
					this.scrolled = false;
				} else if (this.lastPosition < this.limitHeader) {
	      	this.scrolled = true;
				}

				this.lastPosition = window.scrollY;
			},
		},
		props: {
			showFixedOnly: {
				default: false,
				type: Boolean,
			}
		},
		created() {
			if(!this.showFixedOnly){
				this.scrolled = true;
				window.addEventListener('scroll', this.handleScroll);
			}
		},
		destroyed() {
			if(!this.showFixedOnly){	
				window.removeEventListener('scroll', this.handleScroll);
			}
		},
	}
</script>

<style lang="scss">
	@import "@/assets/styles/modules/_variable.scss";
	.header{
		margin: 0 100px;
		position: relative;
		z-index: 9;
		ul{
			padding: 0;
			margin: 0;
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
			&.unpinned{
				transform: translateY(-100%);
				transition-timing-function: ease-in;
		  	transition: 0.2s;
			}
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

		.header-fix{
			&.is-show{
		  	transition: 0.25s;
			  transition-timing-function: ease-out;

			  transform: translateY(0);
			  opacity: 1;
		  }

		  display: flex;
		  min-height: 50px;
		  background: rgba(#fff, .7);
			font-size: 80%;
			padding: 7px 100px;
			position: fixed;
			top: 0;
			right: 0;
			width: 100%;
			z-index: 9;
			//animation
			transform: translateY(-100%);
		  transition-timing-function: ease-in;
		  transition: 0.2s;

			img{
				height: auto;
				width: 75px;
				max-height: 50px;
			}
			.menu-list{
		    width: auto;
		    z-index: 2;
		    -webkit-transition-delay: 1.5s;
		    transition-delay: 1.5s;
		    display: flex;
			  justify-content: center;
			  flex-direction: column;
			  margin-left: auto;
			  margin-right: auto;

				ul{
					float: right;

					li{
						display: inline-block;
						margin-right: 30px;
						a{
							color: $v-blue;
							font-size: 12px;
							letter-spacing: 1.5px;
							font-weight: 500;
							&.active{
								&:after{
									content: "";
									position: absolute;
									bottom: 0;
									height: auto;
									width: 40px;
									border-bottom: 3px solid $v-second-blue;
								}
							}
						}
					}
				}
			}
			.menu-contact-info{
				float: right;
				width: auto;
				display: flex;
				justify-content: center;
			  flex-direction: column;
			  p{
			  	color: $v-blue;
			  	margin-bottom: 5px;
			  	font-size: 12px;
			  }
			  small{
			  	color: $v-second-blue;
			  }
			}
		}
	}
</style>