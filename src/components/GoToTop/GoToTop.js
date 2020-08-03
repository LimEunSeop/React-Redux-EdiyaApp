import React, { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'

import AppButton from 'components/AppButton/AppButton'
import { ReactComponent as ArrowIcon } from 'assets/arrow.svg'

const StyledButton = styled(AppButton)`
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  background: #dbe3f0;
  border-radius: 50%;
  transition: all 0.3s ease-out 0.1s;
  transform: translateY(100px);
  
  &.is-show {
    visibility: visible;
    opacity: 1;
    transform: none;
  }

  svg {
    width: 32px;
    height: 32px;
  }

  &:hover svg {
    animation: moveUpAndThenBackOut 0.45s ease-in-out;
  }
`

StyledButton.displayName = 'StyledButton'

/**
 ** 글로벌 멤버 추출 
 */
const { document: { documentElement: html, body } } = window

/**
 * @function GoToTop
 */
function GoToTop({ label, changeModePosition }) {
  // 상태
  const [ isShow, setIsShow ] = useState(false)

  // 이벤트 핸들러
  const handleGoToTop = useCallback(() => {
    html.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleScrollDetection = useCallback(
    () => {
      const { pageYOffset: scrollY } = window

      scrollY > changeModePosition ? setIsShow(true) : setIsShow(false)
    },
    [ changeModePosition ]
  )

  // 사이드 이펙트
  useEffect(
    () => {
      window.addEventListener('scroll', handleScrollDetection)
      return () => {
        window.removeEventListener('scroll', handleScrollDetection)
      }
    },
    [ handleScrollDetection ]
  )

  // 클래스 속성 병합
  const combineClassNaems = classNames(isShow ? 'is-show' : '')

  // 렌더링
  return createPortal(
    <StyledButton aria-label={label} className={combineClassNaems} onClick={handleGoToTop}>
      <ArrowIcon />
    </StyledButton>,
    body
  )
}

// 전달 속성 기본 값
GoToTop.defaultProps = {
  label: '페이지 상단 이동',
  changeModePosition: 100,
}

// 컴포넌트 디버깅 표시
ArrowIcon.displayName = 'ArrowIcon'

export default GoToTop
