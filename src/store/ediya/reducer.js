import { FETCH_EDIYA_DB } from './actions'

/**
 ** 초기 상태
 */
export const initState = {
  navigation: {},
  beverageList: [],
}

/**
 ** 리듀서 
 */
export const ediyaReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_EDIYA_DB:
      const { navigation, beverageList } = payload

      return {
        ...state,
        navigation,
        beverageList,
      }
    default:
  }
  return state
}
