import React from 'react'
import { any } from 'prop-types'
import classNames from 'classnames'

/**
 * @function A11yHidden
 */
const A11yHidden = ({ children, className, as: Component, ...restProps }) => (
  <Component {...restProps} className={classNames('a11yHidden', className)}>
    {children}
  </Component>
)

// 전달 속성 검사
A11yHidden.propTypes = {
  children: any.isRequired,
}

// 전달 속성 기본 값
A11yHidden.defaultProps = {
  as: 'span',
}

export default A11yHidden
