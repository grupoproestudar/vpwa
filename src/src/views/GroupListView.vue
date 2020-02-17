<template>
  <div>
    <group-list :content='groups' @onCallback="onCallback"></group-list>
  </div>
</template>

<script>
import GroupList from '@/components/GroupList'
import GroupService from '@/services/group-service'

export default {
  components: { GroupList },
  data () {
    return {
      groups: []
    }
  },
  async mounted () {
    let loader = this.$loading.show()
    this.groups = await new GroupService().get()
    loader.hide()
  },
  methods: {
    async onCallback (item) {
      await this.$router.push({ name: 'feedback', params: { id: item.id } })
    }
  }
}
</script>

<style>
</style>
