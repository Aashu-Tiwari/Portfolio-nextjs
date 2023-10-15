import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  student : null,
  errors:[]
}

export const studentReducer = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addstudent:(state,action) =>{
        state.student = action.payload
    },
    },
});
export const {addstudent} = studentReducer.actions

export default studentReducer.reducer;