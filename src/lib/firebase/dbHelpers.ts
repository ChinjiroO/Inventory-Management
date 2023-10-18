import { db } from './config'
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'

const addProduct = async ({
  productName,
  productDescription,
}: {
  productName: string
  productDescription: string
}) => {
  try {
    await addDoc(collection(db, 'Products'), {
      productName,
      productDescription,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    })
  } catch (err) {
    console.error('something wrong!::', err)
  }
}

export { addProduct }
