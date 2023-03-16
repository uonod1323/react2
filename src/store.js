import { configureStore } from '@reduxjs/toolkit'
import user from './store/userSlice.js'
import cartStore from './store/cartStore.js'

export default configureStore({
  reducer: { 
    user : user.reducer,
    cartStore : cartStore.reducer,
   }
}) 


