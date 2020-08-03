import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import A11yHidden from 'components/A11yHidden/A11yHidden'
import ediyaLogoUrl from 'assets/ediya-logo.svg'

const StyledBrand = styled.h1`
  margin-top: 0;
  margin-bottom: 0;

  .animate & {
    opacity: 0;
    transform: translateX(-4rem);
    animation: transform-none 0.3s 0.7s cubic-bezier(0, 0, 0.23, 1.43) forwards;
  }
`

StyledBrand.displayName = 'StyledBrand'

const StyledLink = styled.a`
  box-sizing: content-box;
  display: block;
  width: 152px;
  height: 15px;
  padding: 26px;
  background: url(${ediyaLogoUrl}) no-repeat center;
  background-size: 152px 15px;
`

StyledLink.displayName = 'StyledLink'

/**
 * @function AppHomeLink
 */
const AppHomeLink = ({
  external,
  children,
  className,
  wrapperProps: { as, className: wrapperClassName, ...restWrapperProps },
  ...linkProps
}) => {
  // as 컴포넌트 설정
  const WrapperComponent = as || AppHomeLink.defaultProps.wrapperProps.as

  // 렌더링
  return (
    <StyledBrand as={WrapperComponent} className={wrapperClassName} {...restWrapperProps}>
      <StyledLink
        className={className}
        target={external ? '_blank' : null}
        rel={external ? 'noopener noreferrer' : null}
        {...linkProps}
      >
        {children || <A11yHidden>홈 링크</A11yHidden>}
      </StyledLink>
    </StyledBrand>
  )
}

// 전달 속성 검사
AppHomeLink.propTypes = {
  href: string.isRequired,
}

// 전달 속성 기본 값
AppHomeLink.defaultProps = {
  wrapperProps: {
    as: 'h1',
  },
}

export default AppHomeLink
