import { configureStore } from "@reduxjs/toolkit";
import ClientSlice from "./Client/ClientSlice";
import Slice from "./Stock/Slice";

const Store = configureStore({
  reducer: {
    stock: Slice,
    user: ClientSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export default Store;
