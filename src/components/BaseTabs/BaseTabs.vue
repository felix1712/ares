<template>
	<div class="frame-tabs">
  	<input class="custom-tabs" :id="radioId" :value="radioValue" type="radio" :name="radioName" @click="radioChange(radioValue)" v-model="tabPicked">
	  <label class="label-tabs" :for="radioId">{{labelRadio}}</label>
	</div>
</template>

<script>
	export default {
		name: 'BaseTabs',
		data() {
			return {
				tabPicked: '',
			}
		},
		mounted() {
			if(this.picked){
				this.tabPicked = this.picked;
			}
		},
		methods: {
	    radioChange(value){
				this.tabPicked = value;
				this.$emit('input', this.tabPicked);
			},
	  },
	  props: ['radioName', 'radioId', 'radioValue', 'labelRadio', 'picked' ]
	}
</script>

<style lang="scss">
	@import "@/assets/styles/modules/_variable.scss";
	.frame-tabs{
		display: inline-block;

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
</style>