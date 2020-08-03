/**
 ** 액션 상수
 */

export const FETCH_EDIYA_DB = 'Ediya 데이터 패치 요청'

/* -------------------------------------------------------------------------- */

/**
 ** 액션 크리에이터 함수
 */

export const fetchEdiyaData = (data) => {
  return {
    type: FETCH_EDIYA_DB,
    payload: data,
  }
}
