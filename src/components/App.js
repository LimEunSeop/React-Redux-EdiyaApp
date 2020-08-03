import React, { Fragment, useState, useEffect } from 'react'
import css from 'utils/css'

import AppHeader from 'components/AppHeader/AppHeader'
import AppMain from 'components/AppMain/AppMain'
import GoToTop from 'components/GoToTop/GoToTop'
import AppLoading from './AppLoading/AppLoading'

import { connect } from 'react-redux'
import { fetchEdiyaData } from 'store/ediya/actions'

const mapDispatchToProps = {
  fetchEdiyaData,
}

/**
 * @class App
 */
function App({ fetchEdiyaData }) {
  // 상태
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  // 사이드 이펙트 (생성 과정에서 1회 실행)
  useEffect(
    () => {
      // 데이터 패치 요청 비동기 함수
      const fetchData = async () => {
        // 로딩 상태 업데이트
        setLoading(true)

        try {
          // 네트워크 요청
          const response = await fetch(`${process.env.PUBLIC_URL}/api/ediyaDB.json`)
          const { navigation, beverageList } = await response.json()
          // 응답(성공) 상태 업데이트
          fetchEdiyaData({ navigation, beverageList })
          setLoading(false)
        } catch (error) {
          // 응답(실패) 상태 업데이트
          setError(error)
          setLoading(false)
        }
      }

      // DOM 렌더링 후, 데이터 패치 요청
      fetchData()
    },
    [ fetchEdiyaData ]
  )

  // 로딩 중 렌더링
  if (loading) {
    return (
      <AppLoading
        style={css`
          position: fixed;
          top: 50%;
          left: 50%;
          width: 120px;
          height: 120px;
          transform: translate(-50%, -50%);
        `}
      />
    )
  }

  // 오류 렌더링
  if (error) {
    return <div>오류 {error.message} 발생</div>
  }

  // 렌더링
  return (
    <Fragment>
      <AppHeader />
      <AppMain />
      <GoToTop />
    </Fragment>
  )
}

export default connect(null, mapDispatchToProps)(App)
