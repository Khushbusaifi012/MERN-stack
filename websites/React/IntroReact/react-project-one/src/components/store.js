import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

})


//Steps:
//create store
//wrap app component under provider
//create slice
//register reducer in store