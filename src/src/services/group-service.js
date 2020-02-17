import db from '../data/firebase'

class GroupService {
  constructor () {
    this.repository = db.collection('groups')
    this.keyCache = 'groups'
  }

  addCache = (groups) => {
    localStorage.setItem(this.keyCache, JSON.stringify(groups))
  }

  loadCache = () => {
    return JSON.parse(localStorage.getItem(this.keyCache))
  }

  get = async () => {
    let collection = await this.repository.orderBy('description', 'asc').get()
    let groups = collection.docs.map((doc) => { return { id: doc.id, description: doc.data().description } })
    return groups
  }

  getById = async (id) => {
    let group = await this.repository.doc(id).get()
    return group.data()
  }
}

export default GroupService
