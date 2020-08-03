import React from 'react'
import styled from 'styled-components'
import css from 'utils/css'

import BeverageItem from 'components/BeverageItem/BeverageItem'
import AppLoading from 'components/AppLoading/AppLoading'

import { connect } from 'react-redux'
const mapStateToProps = ({ ediya: { beverageList } }) => ({
  items: beverageList,
})

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`

StyledList.displayName = 'StyledList'

const AppLoadingStyles = css`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  transform: translate(-50%, -50%);
`

/**
 * @function BeverageList
 */
const BeverageList = ({ items }) => {
  // items 개수가 0인 경우, 렌더링
  if (items.length === 0) {
    return <AppLoading style={AppLoadingStyles} />
  }

  // items 개수가 1개 이상인 경우, 렌더링
  return (
    <StyledList className="resetList">
      {items.map((item) => <BeverageItem key={item.id} item={item} />)}
    </StyledList>
  )
}

// 전달 속성 기본 값
BeverageList.defaultProps = {
  items: [],
}

export default connect(mapStateToProps)(BeverageList)
