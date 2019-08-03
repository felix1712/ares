<template>
	<div class="property">
		<div class="property-content s-mw">
			<BaseHeaderTitle :title="'Type 39 / 84 m2'" />
			<div class="row">
				<div class="col-5 property-info">
					<p class="text-intro">Type 39 / 84 adalah hunian yang sangat cocok untuk keluarga kecil karena memiliki spesifikasi sebagai berikut</p>
					<ul class="property-info-list">
						<li>
							<span>Kamar Tidur</span>
							<span>2</span>
						</li>
						<li>
							<span>Kamar Mandi</span>
							<span>1</span>
						</li>
						<li>
							<span>Taman</span>
							<span>2</span>
						</li>
						<li>
							<span>Carport</span>
							<span>1</span>
						</li>
						<li>
							<span>Ruang Tamu</span>
							<span>1</span>
						</li>
						<li>
							<span>Dapur</span>
							<span>1</span>
						</li>
					</ul>
					<h2>Spesifikasi</h2>
					<ul class="property-info-full">
						<li>
							<span>Struktur</span>
							<span>Beton Bertulang</span>
						</li>
						<li>
							<span>Pondasi</span>
							<span>batu kali</span>
						</li>
						<li>
							<span>Dinding</span>
							<span>Bata Ringan ( Hebel ) + Plester, Aci</span>
						</li>
						<li>
							<span>Cat</span>
							<span>Catylac</span>
						</li>
						<li>
							<span>atap</span>
							<span>rangka galvanis, gypsum</span>
						</li>
						<li>
							<span>Lantai</span>
							<span>granit tile 60 / 60</span>
						</li>
						<li>
							<span>kusen</span>
							<span>alumunium finishing cat powder coating</span>
						</li>
						<li>
							<span>pintu</span>
							<span>panel solid</span>
						</li>
						<li>
							<span>sanitari</span>
							<span>closet duduk toto</span>
						</li>
						<li>
							<span>air bersih</span>
							<span>PDAM</span>
						</li>
						<li>
							<span>listrik</span>
							<span>1300 Watt</span>
						</li>
					</ul>
				</div>
				<div class="col-7 property-plan">
					<img src="@/assets/images/denah-39.png" />
				</div>
			</div>
			<div class="row">
				<div class="col-12 property-siteplan">
					<ZoomerImage 
						:imgZoom="siteplan"
						:imgNormal="siteplan"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BaseHeaderTitle from '@/components/BaseHeaderTitle/BaseHeaderTitle.vue';
	import ZoomerImage from '@/components/ZoomerImage/ZoomerImage.vue';
	import siteplan from '@/assets/images/siteplan.png';
	export default{
		name: 'Property',
		data() {
			return {
				siteplan,
				sitePos: '',
				siteBackground: '',
			}
		},
		methods: {
		},
		components: {
			BaseHeaderTitle,
			ZoomerImage
		}
	}
</script>

<style lang="scss">
	@import "@/assets/styles/modules/_variable.scss";
	.property{
		.property-info{
			h2{
				font-size: 1.5rem;
				margin: 50px 0 20px 0;
			}
			p{
				&.text-intro{
					font-size: 1rem;
					line-height: 1.7;
				}
			}
			ul {
				padding: 0;
				li{
					display: table;
					margin: 15px 0;
					font-weight: 500;

					span{
						display: table-cell;
						font-size: 1.1rem;
						text-transform: capitalize;

						+span{
							width: 1%;
							vertical-align: bottom;
						}
					}
				}
				&.property-info-list{
					max-width: 90%;

					li{
						&:first-child{
							margin-top:	40px;
						}

						span{
							&:first-child{
								position: relative;
								overflow: hidden;
								&:after{
									content: "";
									position: absolute;
									bottom: 0.2rem;
									margin-left: 1rem;
									width: 95%;
									height: 8px;
									background-image: linear-gradient(to right, black 33%, rgba($v-black,0) 0%);
									background-position: bottom;
									background-size: 8px 2px;
									background-repeat: repeat-x;
								}
							}

							+span{
								text-align: right;
								padding-left:   0.5em;
								font-size: 1.1rem;
							}
						}
					}
				}

				&.property-info-full{
					li{
						margin: 15px 0;
						span{
							&:first-child{
								text-transform: uppercase;
								overflow: hidden;
								vertical-align: bottom;
								min-width: 8rem;
								width: auto;
								&:after{
									content: " : ";
									margin-left: .5rem;
									float: right;
									// text-align: right;
								}
							}

							+span{
								text-align: left;
								padding-left: 1rem;
								font-size: 1rem;
								width: auto;
							}
						}
					}
				}
			}
		}
		.property-plan{
			img{
				width: 100%;
				height: auto;
				vertical-align: middle;
				max-height: 53rem;
			}
		}
		.property-siteplan{
			margin-top: 100px;
			.zoomer-image{
				min-height: 55rem;
			}
		}
	}
</style>