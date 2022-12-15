import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from "../../types/app_types"
import { RootState } from '../store';

interface UserState {
  value: UserType | null
}

const initialState:UserState = {
  value: null
} 

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    mountUser: (state, action: PayloadAction<UserType>) => {
      state.value = action.payload;
    },
    dismountUser: (state) => {
      state.value = null;
    },
  },
});

export const { mountUser, dismountUser } = user.actions;
export const selectUser = (state: RootState) => state.user.value;
export default user.reducer;
