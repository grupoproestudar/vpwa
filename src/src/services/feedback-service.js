import db from '../data/firebase'

class FeedbackService {
  constructor () {
    this.repository = db.collection('feedbacks')
  }

  save = async (doc) => {
    await this.repository.add(doc)
  }
}

export default FeedbackService
