<template>
  <div class="home">
  	<BaseHeader />
  	<div class="banner-slide">
  		<div class="image-banner">
  			<img src="@/assets/images/gate.png" />
  		</div>
  		<div class="text-banner">
  			<h3>Type 39</h3>
  			<p>Tipe 39 adalah rumah minimalis yang sangat cocok untuk keluarga kecil yang baru memliki buah hati</p>
  		</div>
  	</div>
  	<div class="arrow-scroll">
  		<div class="line"></div>
  		<div class="point"></div>
  	</div>
  	<div class="home-content">
		  <div class="home-about s-mw">
		  	<div class="header-title">
		  		<h5>Ares Residence</h5>
		  	</div>
		  	<div class="row">
		  		<div class="col-6 s-p-0 about-text">
		  			<p>
		  				Ares Residence adalah sebuah kawasan hunian modern di tengah Kota Rangkasbitung. Di desain dengan gaya modern minimalis, perumahan Ares Residence memiliki konsep One Gate System dan dilengkapi dengan berbagai fasilitas terbaik di kelasnya. 
		  				<br>
		  				Ares Residence memiliki 2 tipe hunian dan di desain dengan prinsip hijau dan asri untuk mengoptimalkan kenyamanan kehidupan anda.
		  			</p>
		  		</div>
		  		<div class="col-6 s-p-0 about-image">
		  			<img src="@/assets/images/about.png" />
		  		</div>
		  	</div>
		  </div>
		  <div class="home-benefit">
		  	<div class="s-container">
		  		<div class="row">
		  			<div class="col-4">
		  				<img src="@/assets/images/feature-location.png" />
		  				<p>Strategic Location</p>
		  			</div>
		  			<div class="col-4">
		  				<img src="@/assets/images/feature-mosque.png" />
		  				<p>Mosque</p>
		  			</div>
		  			<div class="col-4">
		  				<img src="@/assets/images/feature-train.png" />
		  				<p>Train Access</p>
		  			</div>
		  		</div>
		  		<div class="row">
		  			<div class="col-4">
		  				<img src="@/assets/images/feature-hospital.png" />
		  				<p>Near Hospital</p>
		  			</div>
		  			<div class="col-4">
		  				<img src="@/assets/images/feature-school.png" />
		  				<p>near school</p>
		  			</div>
		  			<div class="col-4">
		  				<img src="@/assets/images/feature-mall.png" />
		  				<p>Near Mall</p>
		  			</div>
		  		</div>
		  	</div>
		  </div>
		  <div class="home-promo-news s-mw">
		  	<div class="header-title">
		  		<h5>Promo & News</h5>
		  	</div>
		  	<div class="row">
		  		<div class="col-4">
		  			<img src="@/assets/images/promo-kitchen.png" />
		  			<p>Free kitchen set only for july until august periods</p>
		  			<small>Promo</small>
		  		</div>
		  		<div class="col-4">
		  			<img src="@/assets/images/promo-cars.png" />
		  			<p>Buy house free Mitsubishi Pajero Sport without Term & Conditions</p>
		  			<small>Promo</small>
		  		</div>
		  		<div class="col-4">
		  			<img src="@/assets/images/promo-move.png" />
		  			<p>Smart Tips and Tricks moving to new house</p>
		  			<small>Tips & Tricks</small>
		  		</div>
		  	</div>
		  </div>
		  <div class="home-info s-mw">
		  	<div class="frame-tabs">
			  	<input class="custom-tabs" id="type1" value="type1" type="radio" name="tabs" v-model="tabModel">
				  <label class="label-tabs" for="type1">Tipe 39</label>

				  <input class="custom-tabs" id="type2" value="type2" type="radio" name="tabs" v-model="tabModel">
				  <label class="label-tabs" for="type2">Tipe 49</label>
				 </div>

				 <template v-for="(info, index) in 2">
				  <div class="row s-mt-70" v-show="tabModel === 'type'+(index+1)">
				    <div class="col-6 home-info-text">
				    	<div class="header-info">
					  		<h5>Tipe 39</h5>
					  	</div>
					  	<div class="col-10">
					    	<p class="home-info-content">
					    		A property description is made up of 2 parts: key and features and property description. The key feature section is your opportuinity to tell potential tenants about the key selling points of you property, in a bullets point format. The property description section allows you to go in to more depth about your property.
					    	</p>
					    	<div class="home-room-info row s-mt-30">
					    		<div class="row s-bor-bot s-mb-20">
						    		<div class="col-6 s-p-0 s-py-25">
						    			<div class="col-5">
						    				<img src="@/assets/images/icon-beds.png" />
						    			</div>
						    			<div class="col-7 info-text">
						    				<p>Beds</p>
						    				<p>2</p>
						    			</div>
						    		</div>
						    		<div class="vertical-line"></div>
						    		<div class="col-6 s-p-0 s-py-25">
						    			<div class="col-5">
						    				<img src="@/assets/images/icon-beds.png" />
						    			</div>
						    			<div class="col-7 info-text">
						    				<p>Beds</p>
						    				<p>2</p>
						    			</div>
						    		</div>
						    	</div>
						    	<div class="row s-bor-bot s-mb-20">
						    		<div class="col-6 s-p-0 s-py-25">
						    			<div class="col-5">
						    				<img src="@/assets/images/icon-beds.png" />
						    			</div>
						    			<div class="col-7 info-text">
						    				<p>Beds</p>
						    				<p>2</p>
						    			</div>
						    		</div>
						    		<div class="vertical-line"></div>
						    		<div class="col-6 s-p-0 s-py-25">
						    			<div class="col-5">
						    				<img src="@/assets/images/icon-beds.png" />
						    			</div>
						    			<div class="col-7 info-text">
						    				<p>Beds</p>
						    				<p>2</p>
						    			</div>
						    		</div>
						    	</div>
					    		<div class="col-6 s-p-0 s-py-25">
					    			<div class="col-5">
					    				<img src="@/assets/images/icon-beds.png" />
					    			</div>
					    			<div class="col-7 info-text">
					    				<p>Beds</p>
					    				<p>2</p>
					    			</div>
					    		</div>
					    	</div>
					    </div>
				    </div>
				    <div class="col-6 home-info-image">
				    	<img src="@/assets/images/denah-39.png" />
				    </div>
				  </div>
				 </template>
		  </div>
		  <div class="home-location s-mw">
		  	<div class="header-title">
		  		<h5>Location</h5>
		  	</div>
		  	<div class="row">
		  		Location
		  	</div>
		  </div>
		  <div class="home-sales s-mw">
		  	<div class="header-title">
		  		<h5>Sales agent</h5>
		  	</div>
		  	<div class="sales-content">
		  		<div class="sales-frame">
		  			<img src="@/assets/images/sales-1.jpeg" />
		  			<div class="sales-info">
			  			<p class="sales-name">Riko Mulyadi</p>
			  			<small>Sales Consultant</small>
			  			<p class="sales-telp" @click="openWa(6285710470750)">0857 1047 0750</p>
			  		</div>
		  		</div>
		  		<div class="sales-frame">
		  			<img src="@/assets/images/sales-2.jpeg" />
		  			<div class="sales-info">
			  			<p class="sales-name">Doni Sasmito</p>
			  			<small>Sales Consultant</small>
		  				<p class="sales-telp" @click="openWa(6287780954376)">0877 8095 4376</p>
			  		</div>
		  		</div>
		  	</div>
		  </div>
		</div>
		<BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter/BaseFooter.vue';

export default {
  name: 'home',
  data() {
  	return {
  		tabModel: 'type1',
  	};
  },
  components: {
  	BaseHeader,
  	BaseFooter,
  },
  methods: {
  	openWa(data){
  		window.open('//api.whatsapp.com/send?phone=' + data +'&text="Halo saya ingin bertanya"')
  	}
  }
};
</script>


<style lang="scss">
	@import "@/assets/styles/modules/_variable.scss";
	.home{
		.banner-slide{
			height: 100vh;
			.image-banner{
				img{
					background: cover;
					width: 100%;
					height: 100vh;
				}

				&:after{
					content: '';
			    position: absolute;
			    top: 0;
			    left: 0;
			    width: 100%;
			    height: 100%;
			    background: $v-blue;
			    opacity: 0.35;
			    -webkit-transition: opacity 0.5s cubic-bezier(0.71, 0.35, 0.26, 0.83);
			    transition: opacity 0.5s cubic-bezier(0.71, 0.35, 0.26, 0.83);
			    -webkit-transition-delay: 1s;
			    transition-delay: 1s;
				}
			}

			.text-banner{
				color: $v-white;
				position: absolute;
				top: 50%;
				left: 10%;
				transform: translateY(-50%);

				h3{
					font-size: 4.3rem;
					margin: 0 0 20px 0;
				}

				p{
					max-width: 25vw;
					letter-spacing: 1px;
					font-size: 1.2rem;
					margin: 0;
					line-height: 1.7;
				}
			}
		}

		.arrow-scroll{
			width: auto;
			position: absolute;
			top: 87vh;
			right: 50%;
			transform: translate(50%, 0%) rotate(90deg) ;

			.line {
		    margin-top: 5px;
		    width: 90px;
		    background: $v-white;
		    height: 1px;
		    float: left;
			}
			.point {    
		    width: 0;
		    height: 0; 
		    border-top: 5px solid transparent;
		    border-bottom: 5px solid transparent;
		    border-left: 20px solid $v-white;
		    float:right;
			}
		}

		.home-content{
	    margin-top: 50px;

	    .home-about{
	    	.about-text{
	    		p{
	    			max-width: 80%;
	    			line-height: 30px;
						text-align: justify;
						font-size: 1.2rem;
						font-weight: 400;
						line-height: 2;

	    			br{
	    				content: "";
						  margin: 1.5rem;
						  display: block;
	    			}
	    		}
	    	}
	    	.about-image{
	    		img{
	    			position: relative;
		    		width: 95%;
		    		float: right;
		    		height: 20rem;
		    		vertical-align: middle;
		    		z-index: 2;
		    		display: block;
		    	}

		    	&:before{
				    bottom: -2rem;
				    border: 10px solid #D8D8D8;
				    content: "";
				    left: -1rem;
				    position: absolute;
				    right: 2rem;
				    top: 2rem;
	    		}
	    	}
	    }
	    .home-benefit{
	    	margin-top: 100px;
	    	background: $v-grey;
	    	text-align: center;
	    	padding: 80px 0;
	    	position: relative;

	    	&:before{
	    		content: "";
	    		background-image: url('~@/assets/images/benefit-dots.png');
	    		background-repeat: no-repeat;
	    		position: absolute;
	    		top: 40px;
	    		left: 30px;
	    		width: 100px;
	    		height: 100px;
	    	}

	    	&:after{
	    		content: "";
	    		background-image: url('~@/assets/images/benefit-dots.png');
	    		background-repeat: no-repeat;
	    		position: absolute;
	    		transform: rotate(90deg);
	    		bottom: 30px;
	    		right: 50px;
	    		width: 100px;
	    		height: 100px;
	    	}

	    	.col-4{
	    		padding-top: 20px;
	    		padding-bottom: 20px;
		    	img{
		    		padding-bottom: 15px;
		    		border-bottom: 3px solid $v-second-blue;
		    		height: 75px;
	    			width: auto;
		    	}
		    	p{
		    		margin: 15px 0;
		    		font-size: 1.4rem;
		    		font-weight: 400;
		    		color: $v-blue;
		    		text-transform: capitalize;
		    	}
		    }
	    }

	    .home-promo-news{
	    	margin-top: 100px;
	    	img{
	    		width: 100%;
	    		max-height: 250px;
	    		vertical-align: middle;
	    	}
	    	p{
	    		margin: 35px 0 10px 0;
	    	}
	    }

	    .home-info{
	    	margin-top: 100px;
	    	.frame-tabs{
	    		width: 100%;
	    		text-align: center;

		    	.custom-tabs{
		    		display: none;
		    	}

		    	.label-tabs{
					  display: inline-block;
					  padding: 15px 30px;
					  font-family: 'Avenir';
					  text-transform: uppercase;
					  text-align: center;
					  color: $v-blue;

					  &:hover{
						  	&:after{
						  	content: '';
						    border-bottom: 3px solid #029FAA;
						    width: 50px;
						    display: block;
						    position: relative;
						    margin: 10px auto 0 auto;
						  }
					  }
		    	}

		    	.custom-tabs:checked + .label-tabs {
					  &:after{
					  	content: '';
					    border-bottom: 3px solid #029FAA;
					    width: 50px;
					    display: block;
					    position: relative;
					    margin: 10px auto 0 auto;
					  }
					}
				}
				.home-info-text{
					.header-info{
						margin-bottom: 5rem;
						h5{
							font-size: 2.3rem;
							color: $v-blue;
							margin-bottom: 1rem;
							text-transform: capitalize;
							letter-spacing: 1px;
							margin: 0;
							margin-bottom: 1rem;
						}
						&:after{
							content: '';
							border-bottom: 2px solid $v-grey;
							width: 50px;
							display: block;
							position: relative;
						}
					}
					.home-info-content{
						font-size: 1.2rem;
						line-height: 35px;
						text-align: justify;
					}
					.home-room-info{
						.vertical-line{
							position: absolute;
							left: 50%;
							margin-top: 3rem;
							transform: translateX(-70%);

							&:after{
								content: '';
						    border: 1px solid $v-second-grey;
						    width: 80px;
						    display: inline-block;
						    transform: rotate(90deg);
							}
						}
						.info-text{
							p{
								font-size: 1.2rem;
								font-weight: 600;

								&:last-of-type{
									margin: 0;
								}
							}
						}
					}
				}
				.home-info-image{
					img{
						width: 90%;
						float: right;
						height: auto;
						max-height: 50rem;
						vertical-align: middle;
					}
				}
	    }

	    .home-sales{
	    	.sales-content{
	    		display: flex;
			    flex-flow: row wrap;
			    justify-content: center;
		    	.sales-frame{
		    		width: auto;
			    	position: relative;
			    	float: left;
			    	padding-right: 100px;

		    		img{
		    			width: 25rem;
		    			height: 35rem;
		    		}

		    		.sales-info{
		    			padding: 20px 50px;
		    			background: $v-white;
		    			position: absolute;
		    			top: 70%;
		    			left: 20%;
		    			text-align: center;
		    			
		    			.sales-name{
		    				margin-bottom: 5px;
		    				font-size: 1.3rem;
		    			}
		    			.small{
		    				font-weight: 300;
		    			}
		    			.sales-telp{
		    				font-weight: 500;
		    				margin: 0;
		    				margin-top: 15px;
		    				cursor: pointer;

		    				&:before{
		    					content: "T.";
		    					margin-right: 15px;
		    				}
		    			}
		    		}
		    	}
		    }
	    }
		}
	}
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