import db from '../data/firebase'

class MentoringService {
  constructor () {
    this.repository = db.collection('mentoring')
  }

  save = async (doc) => {
    await this.repository.add(doc)
  }
}

export default MentoringService
