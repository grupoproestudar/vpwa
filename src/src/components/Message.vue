<template>
  <b-alert class="tot" :show="show">
    <p>{{ message }}</p>
  </b-alert>
</template>
<script>
export default {
  name: 'Message',
  props: ['show', 'message']
}
</script>
<style>
</style>
