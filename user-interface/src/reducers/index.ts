// reducers/index.ts

import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './dataReducer';
import { UserData } from '../models/UserData';
import { Reducer } from 'redux';

// export type ReduxData = {
//     data: UserData;
//   };

export interface ReducerData {
    data: Reducer<UserData>;
}

const rootReducer = combineReducers<ReducerData>({
    data: dataReducer,
    // other reducers
});

export default rootReducer;
