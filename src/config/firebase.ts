import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBbEl92F27YUpzjwKzcX_CGP8xU4tNyQoU',
	authDomain: 'fir-travel-app-4fc3c.firebaseapp.com',
	projectId: 'fir-travel-app-4fc3c',
	storageBucket: 'fir-travel-app-4fc3c.firebasestorage.app',
	messagingSenderId: '1072596976884',
	appId: '1:1072596976884:web:35797f20a0af4da8a00aa1',
	measurementId: 'G-5CNR1FN4T7',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
