import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type StateType = {
  status: 'home' | 'experiences' | 'qualifications'
}

const initialState: StateType = {
  status: 'home'
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeStatus: (
      state,
      action: PayloadAction<'home' | 'experiences' | 'qualifications'>
    ) => {
      state.status = action.payload
    }
  }
})

export const { changeStatus } = homeSlice.actions
export default homeSlice.reducer
