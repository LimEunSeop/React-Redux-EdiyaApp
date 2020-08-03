import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

/**
 * @rootReducer 루트 리듀서
 */
import rootReducer from './rootReducer'

/**
 * @store 스토어
 */
const store = createStore(rootReducer, composeWithDevTools())

/**
 * @component StoreProvider 컴포넌트
 */
export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
