import { configureStore } from '@reduxjs/toolkit'
import { produtosApi } from './services/produtosApi'
import carrinhoReducer from './slices/carrinhoSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
