import FeedbackService from '@/services/feedback-service'
export default {
  methods: {
    hideModal () {
      this.$refs.sucessFeedbackModal.hide()
      this.$router.push('/')
    },
    getDateNow () {
      return this.moment(new Date()).format('DD/MM/YYYY')
    },
    async onSubmit () {
      await this.save()
      this.$refs.sucessFeedbackModal.show()
    },
    async save () {
      let loader = this.$loading.show()
      let doc = {
        group: this.group.description,
        feedback: this.feedback,
        member: this.member,
        grade: this.grade,
        createdAt: this.getDateNow()
      }
      await new FeedbackService().save(doc)
      loader.hide()
    }
  }
}
