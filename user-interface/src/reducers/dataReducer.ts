// reducers/dataReducer.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import collections from '../utils/collections';
import { DocData, UserData } from '../models/UserData';

// Action Creator to fetch data and store in Redux
export const fetchDataAndStoreInRedux = createAsyncThunk(
    'data/fetchData',
    async () => {
        try {
            const db = getFirestore();
            const allData: Partial<UserData> = {}; // Partial to allow incomplete data
            console.log('Fetching data...');

            for (const collectionName of collections) {
                const collectionRef = collection(db, collectionName);
                const snapshot = await getDocs(collectionRef);
                const data: DocData[] = snapshot.docs.map(doc => {
                    // Cast the data to the union type
                    const docData = doc.data() as DocData;
                    return docData;
                });
                // Use type assertion for adding data to allData
                allData[collectionName as keyof UserData] = data as any;

                // const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                // allData[collectionName] = data;
            }

            return allData;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Propagate the error
        }
    }
);

const dataSlice = createSlice({
    name: 'data',
    initialState: {} as UserData, // Initial state type assertion
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDataAndStoreInRedux.fulfilled, (state, action) => {
            return { ...state, ...action.payload };
        });
    }, 
});

export default dataSlice.reducer;
