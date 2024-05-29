// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc  } from 'firebase/firestore';

import firebaseConfig from './serviceAccountKey';
// import dataUserDefault from './dataUserDefault'
import { RootData } from '../models/DefaultUserData';
import { CollectionData } from '../models/CollectionData';
import { CollectionName } from './collections';
import createDataUserDefault from './dataUserDefault';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a Firestore database reference
const db = getFirestore(firebaseApp); 

// Function to create data in Firestore
const createDataInFirestore = async () => {
    try {
        const data : RootData = await createDataUserDefault();
        // Loop through each collection in the JSON dataUser object
        for (const collectionName  in data.dataUser) {
            if (data.dataUser.hasOwnProperty(collectionName)) {
                // console.log(`Creating collection '${collectionName}'...`);
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
