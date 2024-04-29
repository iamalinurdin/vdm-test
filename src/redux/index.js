import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from "./tasks/reducer";

// const persistConfig = {
//   key: 'root',
//   storage
// }
// const rootReducers = combineReducers({
//   tasks: taskSlice.reducer
// })
// const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})
// export const store = configureStore({
//   reducer: persistedReducer
// })

export const persistor = persistStore(store)