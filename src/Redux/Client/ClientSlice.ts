import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
  name: string;
  isLogged: boolean;
}

const INITIAL_STATE: initialStateProps = {
  name: "",
  isLogged: false,
};

export const ClientSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    loginClient(state, { payload }: PayloadAction<string>) {
      return { ...state, isLogged: true, name: payload };
    },
    logoutClient(state) {
      return { ...state, isLogged: false, name: "" };
    },
  },
});

export const useSelectorClient = (state: any) => {
  return state.user as initialStateProps;
};
export const { loginClient, logoutClient } = ClientSlice.actions;
export default ClientSlice.reducer;
