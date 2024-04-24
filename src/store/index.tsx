import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './reducers/home'

const store = configureStore({
  reducer: {
    home: homeReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
