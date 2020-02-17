<template>
  <div class='custom-slider'>
    <vue-slider
      ref='slider'
      v-model='value'
      :max='3'
      :min='1'
      :piecewise='true'
      :bg-style='bgStyle'
      :slider-style='sliderStyle'
      :process-style='processStyle'
    ></vue-slider>
  </div>
</template>
<script>
import vueSlider from 'vue-slider-component'

export default {
  name: 'CustomSlider',
  components: { vueSlider },
  data () {
    return {
      value: 1,
      bgStyle: {
        backgroundColor: '#e5ca2c'
      },
      sliderStyle: {
        backgroundColor: '#0f063f',
        border: '1px solid  #e5ca2c'
      },
      processStyle: {
        backgroundColor: '#e5ca2c'
      }
    }
  },
  watch: {
    value: function (val) {
      window.app.$emit('SliderValue', val)
    }
  }
}
</script>

<style>
.vue-slider-component .vue-slider-tooltip {
  color: #e5ca2c !important;
  border: 1px solid #e5ca2c !important;
  background-color: #0f063f !important;
}
</style>