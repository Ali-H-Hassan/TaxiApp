import { configureStore } from '@reduxjs/toolkit'

import UserReducer from './userSlice'

const store = configureStore({
  reducer: {
    selfUser: UserReducer
  }
})

export default store
