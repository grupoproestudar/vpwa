<template>
  <b-container class="bv-example-row">
    <b-alert show class="tot">Selecione para quem deseja dar um feedback</b-alert>
    <group-list :content='types' @onCallback="onCallback"></group-list>
  </b-container>
</template>

<script>
import GroupList from '@/components/GroupList'
export default {
  components: { GroupList },
  data () {
    return {
      types: [{
        description: 'Aulas',
        to: 'groups'
      },
      {
        description: 'Apadrinhamento',
        to: 'mentoring'
      }]
    }
  },
  methods: {
    async onCallback (item) {
      await this.$router.push({ name: item.to })
    }
  }

}
</script>

<style>
</style>
