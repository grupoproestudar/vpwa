<template>
  <div>
    <b-modal
      id='sucessFeedbackModal'
      ref='sucessFeedbackModal'
      hide-footer
      centered
      hide-header
      class='tot'
    >
      <div class='d-block text-center tot'>
        <h3>Obrigado pelo seu feedback!</h3>
      </div>
      <b-btn class='mt-3 tot' block @click='hideModal'>OK</b-btn>
    </b-modal>
    <b-form @submit.prevent='onSubmit' @reset.prevent='onReset'>
      <b-form-group
        :label='descriptionSlider'
        label-for='slider'
        description='Vote 1 para Insuficiente, 2 para Bom e 3 para Excelente.'
      >
        <custom-slider id='slider'></custom-slider>
      </b-form-group>
      <b-form-group>
        <b-form-textarea
          class='tot'
          novalidate
          v-model='feedback'
          placeholder='Descreva seu feedback aqui!'
          :rows='8'
          required
          :maxlength='max'
        ></b-form-textarea>
        <b-alert show class='tot'>Quantidade de caracteres: {{max - feedback.length}}</b-alert>
      </b-form-group>
     <button-form :callback="callback"></button-form>
    </b-form>
  </div>
</template>
<script>
import CustomSlider from '@/components/CustomSlider'
import ButtonForm from '@/components/ButtonForm'
import mentoringMixin from '@/mixins/mentoring-mixin'

export default {
  mixins: [mentoringMixin],
  components: { CustomSlider, ButtonForm },
  data () {
    return {
      feedback: '',
      callback: '/',
      max: 280,
      grade: 1,
      showModal: false,
      descriptionSlider: 'Avalie seu apadrinhamento.'
    }
  },
  created () {
    window.app.$on('SliderValue', (val) => {
      this.grade = val
    })
  }
}
</script>
<style>
</style>