import React from 'react'
import css from 'utils/css'
import { ReactComponent as Loading } from 'assets/loading.svg'

const styles = css`
  display: block;
  width: 98px;
  height: 98px;
  margin: auto;
  background: transparent;
`

const AppLoading = ({ style }) => {
  const combineStyles = { ...styles, ...(style ? style : {}) }

  return <Loading style={combineStyles} title="로딩 중..." />
}

// 컴포넌트 디버깅 표시
Loading.displayName = 'Loading'

export default AppLoading
