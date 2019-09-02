<template>
	<div class="news">
		<div class="news-content s-mw">
			<div class="tabs-container">
				<template v-for="(item, index) in tabData">
					<BaseTabs
						:radioId="item.name"
						:radioName="'type'"
						:radioValue="item.name.toLowerCase()"
						:labelRadio="item.name"
						:picked="tabData[0].name.toLowerCase()"
						v-model="tabModel"
					/>
				</template>
			</div>
			<div class="row">
				<div class="col-12 s-p-0" v-if="tabModel === 'news'">
					<div class="col-4">
					</div>
					<div class="col-8">
						
					</div>
				</div>
				<div class="col-12 s-p-0" v-if="tabModel === 'promo'">
					Aku Promo
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import BaseTabs from '@/components/BaseTabs/BaseTabs.vue';

	export default {
		name: 'News',
		data(){
			return {
				tabModel: 'news',
				tabData: [
					{
						id: 1,
						name: 'News',
					},
					{
						id: 2,
						name: 'Promo'
					}
				]
			}
		},
		components: {
			BaseTabs,
		}
	}
</script>

<style lang="scss">
@import "@/assets/styles/modules/_variable.scss";
	.news{
		.news-content{
			.tabs-container{
				width: 100%;
				text-align: center;
			}
		}
	}
</style>