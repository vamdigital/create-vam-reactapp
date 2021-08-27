import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fakeAPI } from "./../../utils/fakeAPI";
type Users = {
  id: number;
  userName: string;
  userEmail: string;
};

type UsersState = {
  status: "idle" | "loading" | "success" | "failure";
  users: Users;
};

const initialState = {
  users: {},
  status: "idle",
} as UsersState;

export const fetchUsers = createAsyncThunk<Users>(
  "users/fetchUsers",
  async () => {
    const response = await fakeAPI();
    return response;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state) => {
      state.users = initialState.users;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, { payload }: PayloadAction<Users>) => {
        state.status = "success";
        state.users = payload;
      }
    );
  },
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
