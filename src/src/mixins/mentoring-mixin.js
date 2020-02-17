import MentoringService from '@/services/mentoring-service'
export default {
  methods: {
    hideModal () {
      this.$refs.sucessFeedbackModal.hide()
      this.$router.push('/')
    },
    getDateNow () {
      return this.moment(new Date()).format('DD/MM/YYYY')
    },
    onUpdateGrade (value) {
      this.grade = value
    },
    async onSubmit () {
      await this.save()
      this.$refs.sucessFeedbackModal.show()
    },
    async save () {
      let loader = this.$loading.show()
      let doc = {
        feedback: this.feedback,
        grade: this.grade,
        createdAt: this.getDateNow()
      }
      await new MentoringService().save(doc)
      loader.hide()
    }
  }
}
