import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import  productApi  from './services/product'
import  categoryApi  from './services/category'
import sliderApi from './services/slider'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    productApi.middleware,
    categoryApi.middleware,
    sliderApi.middleware,
  ],
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)