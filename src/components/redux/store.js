
import { configureStore } from "@reduxjs/toolkit";
import cartSystem from './CartSystem';

const store = configureStore({
reducer:{
user:cartSystem
}

})

export default store;
