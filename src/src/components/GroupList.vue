<template>
  <div id="group-list">
    <b-list-group v-for='(item, index) in content' :key='index' v-b-scrollspy class='list-group'>
      <p>
        <b-list-group-item
        class='tot list-group-item'
        @click='onCallback(item)'
      >{{item.description}}</b-list-group-item>
      </p>
    </b-list-group>
  </div>
</template>
 
<script>
export default {
  props: ['content'],
  data () {
    return {}
  },
  methods: {
    onCallback (item) {
      this.$emit('onCallback', item)
    }
  }
}
</script>

<style>
.list-group-item {
  border-color: #e5ca2c !important;
}
.list-group {
  position: relative;
}
</style>