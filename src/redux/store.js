import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './todoslice'
const store = configureStore({reducer:{
    todos : todoSlice

}});
export default store;
