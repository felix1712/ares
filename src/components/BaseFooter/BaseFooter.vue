<template>
	<div class="footer s-mw">
		<div class="row">
			<div class="col-3 footer-menu">
				<ul>
					<li><a>About</a></li>
					<li><a>Promo & news</a></li>
					<li><a>property</a></li>
					<li><a>location</a></li>
					<li><a>our sales</a></li>
					<li><a>contact us</a></li>
				</ul>
			</div>
			<div class="col-3 footer-kpr">
				<h5>Kpr Support</h5>
				<div class="kpr-list">
					<img src="@/assets/images/btn-logo.png" />
					<img src="@/assets/images/bri-logo.png" />
				</div>
			</div>
			<div class="col-6 footer-contact-us">
				<h5>Contact Us</h5>
				<div class="form-contact-us">
					<div class="col-6 s-pr-15">
						<input type="text" placeholder="Name" />
					</div>
					<div class="col-6">
						<input type="email" placeholder="Email" />
					</div>
					<div class="col-12">
						<input type="text" placeholder="Subject" />
					</div>
					<div class="col-12">
						<textarea placeholder="Messages" rows="3" />
					</div>
					<div class="col-12 submit-buton">
						<a class="btn">Submit</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row s-mt-50">
			<div class="col-3 s-p-0 footer-logo">
				<img src="@/assets/images/main-logo.png"/>	
			</div>
			<div class="col-4 s-p-0 footer-developer">
				<p><span>Developed by :</span> Pt.ares sarana asaindo <img src="@/assets/images/asa-logo.png" /></p>
			</div>
			<div class="col-3 s-p-0 footer-copyright">
				<p>Copyright &copy; 2019, Ares Residence</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'BaseHeader',
	}
</script>

<style lang="scss">
	@import "@/assets/styles/modules/_variable.scss";

	@mixin placeholder {
    &::-webkit-input-placeholder {
        @content;
    }
    &:-moz-placeholder {
        @content;
    }
    &::-moz-placeholder {
        @content;
    }
    &:-ms-input-placeholder {
        @content;
    }
	}

	.footer{
		border-top: 3px solid $v-grey;
		margin-top: 250px;
		padding: 50px 100px;
		.footer-menu{
			padding: 0;
			ul{
				padding: 0;
				margin: 0;
				li{
					list-style: none;
					margin: 25px 0;
					&:first-of-type{
						margin-top: 0;
					}

					&:last-of-type{
						margin-bottom: 0;
					}
					a{
						text-transform: uppercase;
						font-size: 0.8rem;
					}
				}
			}
		}
		.footer-kpr{
			padding: 0;
			h5{
				margin: 0;
				font-size: 1.2rem;
				text-transform: uppercase;
				color: $v-blue;

				&:after{
			  	content: '';
			    border-bottom: 3px solid #029FAA;
			    width: 50px;
			    display: block;
			    position: relative;
			    margin-top: 10px;
			  }
			}
			.kpr-list{
				img{
					display: block;
					width: 100%;
					max-width: 10rem;
					height: auto;
					max-height: 10rem;
					margin-top: 30px;
				}
			}
		}
		.footer-contact-us{
			padding: 0;
			h5{
				margin: 0;
				font-size: 1.2rem;
				text-transform: uppercase;
				color: $v-blue;

				&:after{
			  	content: '';
			    border-bottom: 3px solid #029FAA;
			    width: 50px;
			    display: block;
			    position: relative;
			    margin-top: 10px;
			  }
			}
			.form-contact-us{
				div[class^="col-"]{
					padding: 0;

					input,textarea{
						width: 100%;
						border: none;
						border-bottom: 2px solid $v-grey;
						box-shadow: none;
						padding: 20px 0;
						font-size: 0.9rem;
						resize: none;
						font-family: inherit;
						font-weight: 500;

						&:active,
						&:focus{
							border-bottom: 2px solid $v-blue;

							@include placeholder {
			        	color: $v-blue;
					    }
						}

						 	@include placeholder {
			        	color: $v-black;
					    }
					}
				}
				.submit-buton{
					margin-top: 20px;
					text-align: center;
				}
			}
		}
		.footer-logo{
			img{
				height: 100px;
				width: 100px;
			}
		}
		.footer-developer{
			height: 100px;
			display: flex;
		  justify-content: center;
		  flex-direction: column;

			p{
				margin: 0;
				display: inline-block;
				color: $v-blue;
				text-transform: uppercase;
				font-size: 1rem;
				font-weight: 500;
				span{
					font-weight: 400;
				}
			}
			img{
				margin-left: 15px;
				width: 70px;
				height: 35px;
				vertical-align: middle;

			}
		}
		.footer-copyright{
			height: 100px;
			text-align: right;
			display: flex;
		  justify-content: center;
		  flex-direction: column;

			p{
				margin: 0;
				font-size: 0.9rem;
				color: $v-blue;
				font-weight: 400;
			}
		}
	}
</style>