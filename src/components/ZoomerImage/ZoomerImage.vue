<template>
	<div class="zoomer-image" @mousemove="moveBG">
	  <img src="http://www.afalchi.it/media/img/lens.png" alt="" class="plus">
	  <div class="img normal" :style="{ backgroundImage: `url(${imgNormal})`}"></div>
	  <div class="img zoom" :style="{ backgroundImage: `url(${imgZoom})`}"></div> 
	</div>
</template>

<script>
	export default{
		name: 'ZoomerImage',
		props: ['imgNormal', 'imgZoom'],
		methods: {
	    moveBG: function (ev) {
	      var container = this.$el,
	      imgZoom = container.childNodes[2];
	      
	      
	      var e = {
	        w: imgZoom.offsetWidth,
	        h: imgZoom.offsetHeight
	      };     

	      var c = {
	        x: Math.round((ev.clientX - (container.offsetLeft - window.scrollX)) / (e.w / 100)),
	        y: Math.round((ev.clientY - (container.offsetTop - window.scrollY)) / (e.h / 60))
	      };
	      
	      imgZoom.style.backgroundPosition = c.x + '% ' + c.y + '%';
	    }
	  }
	}
</script>

<style lang="scss">
	.zoomer-image{
		 position: relative;
	  width: 100%;
	  height: 100%;
	  border: 0;
	  overflow: hidden;
	  //box-shadow: 0px 5px 10px #000;
	   
	  transition: all .5s ease-out;
	  
	  &:hover {
	    // border-radius: 50%;
	    cursor: move;
	    .normal {
	      opacity: 0;
	      transform: scale(1.1);
	    }
	    .plus {
	      opacity: 0;
	      transform: scale(.8);
	    }
	  }
		.img{
			position: absolute;
		  top: 0;
		  width: 100%;
		  height: 100%;
		  background-position: center center;
		  background-repeat: no-repeat;
		  background-color: white;
		  transition: all ease-out .3s;

		  &.normal{
		  	z-index: 20;
  			background-size: contain; 
		  }

		  &.zoom{
		  	z-index: 10;
  			transition: none;
		  }
		}

		img{
			&.normal{
				opacity: 0;
  			width: 100%;
			}
		}
	}

</style>