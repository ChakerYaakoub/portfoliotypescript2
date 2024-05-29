// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc  } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage modules

import firebaseConfig from './serviceAccountKey';
// import dataUserDefault from './dataUserDefault'
import { RootData } from '../models/DefaultUserData';
import { CollectionData } from '../models/CollectionData';
import collections, { CollectionName } from './collections';
import createDataUserDefault from './dataUserDefault';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore and Storage references
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// Function to upload image to Firebase Storage
export const uploadImageToStorage = async (path: string , name : string): Promise<string> => {
    // Fetch the image file using its path (assuming it's available in the public folder)
    const response = await fetch(path);
    const blob = await response.blob();

    // Upload the image blob to Firebase Storage
    const storageRef = ref(storage, `images/${name}`);
    await uploadBytes(storageRef, blob);
    
    // Get the download URL of the uploaded image
    const url = await getDownloadURL(storageRef);
    console.log(`Image uploaded to: ${url}`);
    return url;
};

// Function to create data in Firestore
const createDataInFirestore = async () => {
    try {
        const testCollection = collection(db, collections[0]);

        // Check if the collection exists
        const haveCollection = await getDocs(testCollection);

        // If the collection doesn't exist, create it
        if (!haveCollection.empty) { 
            console.log('Data already exists in Firestore.')
            return
         }
         const data : RootData = await createDataUserDefault();

        // Loop through each collection in the JSON dataUser object
        for (const collectionName  in data.dataUser) {
            if (data.dataUser.hasOwnProperty(collectionName)) {
                // Get the collection reference
                const collectionRef = collection(db, collectionName);

                // Check if the collection exists
                const collectionSnapshot = await getDocs(collectionRef);

                // If the collection doesn't exist, create it
                if (collectionSnapshot.empty) {
                    // Loop through each document in the collection
                    const collectionData : CollectionData = data.dataUser[collectionName as CollectionName];
                    
                    if (Array.isArray(collectionData)) {
                        for (const doc of collectionData) {
                            // Add the document to the collection and let Firestore generate the ID
                            await addDoc(collectionRef, doc);
                        }
                    } else {
                        for (const docId in collectionData) {
                            if (collectionData.hasOwnProperty(docId)) {
                                // Add the document to the collection and let Firestore generate the ID
                                await addDoc(collectionRef, collectionData[docId as keyof typeof collectionData]);
                            }
                        }
                    }

                    console.log(`Collection '${collectionName}' created with documents.`);
                } else {
                    console.log(`Collection '${collectionName}' already exists.`);
                }
            }
        }
        console.log('Data creation complete.');
    } catch (error) {
        console.error('Error creating data:', error);
    }
};


export default createDataInFirestore;
