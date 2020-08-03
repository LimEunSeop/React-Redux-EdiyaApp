import { combineReducers } from 'redux'
import { ediyaReducer } from './ediya/reducer'

export default combineReducers({
  ediya: ediyaReducer,
})
