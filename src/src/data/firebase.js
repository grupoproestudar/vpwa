import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
})
const settings = { timestampsInSnapshots: true }
const db = firebaseApp.firestore()

db.settings(settings)

export default db
