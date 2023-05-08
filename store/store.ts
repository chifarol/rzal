import { configureStore } from "@reduxjs/toolkit";
import menuOpenReducer from "./features/menuOpenSlice";

const store = configureStore({
  reducer: {
    menuOpen: menuOpenReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
