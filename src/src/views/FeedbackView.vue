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
      <b-form-group class='tot'>
        <b-form-select required v-model='member' :options='members' class='tot'>
          <template slot='first'>
            <option :value='null' class='tot'>-- Selecione um Colaborador --</option>
          </template>
        </b-form-select>
      </b-form-group>
      <b-form-group
        :label='descriptionSlider'
        label-for='slider'
        description='Vote 1 para Insuficiente, 2 para Boa e 3 para Excelente.'
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
      <button-form :callback="callback"> </button-form>
    </b-form>
  </div>
</template>
<script>
import GroupService from '@/services/group-service'
import CustomSlider from '@/components/CustomSlider'
import ButtonForm from '@/components/ButtonForm'
import feedbackMixin from '@/mixins/feedback-mixin'

export default {
  mixins: [feedbackMixin],
  components: { CustomSlider, ButtonForm },
  data () {
    return {
      callback: '/groups',
      feedback: '',
      max: 280,
      group: null,
      member: null,
      members: [],
      grade: 1,
      showModal: false,
      descriptionSlider: `Avalie a aula de ${this.getDateNow()}`
    }
  },
  created () {
    window.app.$on('SliderValue', (val) => {
      this.grade = val
    })
  },
  async mounted () {
    let loader = this.$loading.show()
    this.group = await new GroupService().getById(this.$route.params.id)
    this.members = this.group.members
    loader.hide()
  }
}
</script>
<style>
</style>