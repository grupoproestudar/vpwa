<template>
  <div id="ButtonForm">
    <b-button class="tot btn btn-custom btn-lg" type="button" :to="callback">Voltar</b-button>
    <b-button class="tot btn btn-custom btn-lg" type="submit">Enviar</b-button>
    <b-button class="tot btn btn-custom btn-lg" type="reset">Limpar</b-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonForm',
  props: {
    callback: String
  }
}
</script>

<style>
</style>
