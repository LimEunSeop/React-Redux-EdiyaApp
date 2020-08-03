import './BeverageItem.scss'

import React, { Component, Fragment } from 'react'
import AppButton from 'components/AppButton/AppButton'

/**
 ** 글로벌 멤버 추출
 */
const { setTimeout } = window

// 다이얼로그 기본 프리픽스, 클래스 이름
const DIALOG_PREFIX = 'beverageList'
const DIALOG_CLASS_NAME = `${DIALOG_PREFIX}__dialog`

/**
 * BeverageItem 컴포넌트
 */
class BeverageItem extends Component {
  /* -------------------------------------------------------------------------- */
  // 상태

  state = {
    isPressed: false,
    dialogClassName: DIALOG_CLASS_NAME,
  }

  /* -------------------------------------------------------------------------- */
  // 이벤트 핸들러 메서드

  handleShowDialog = (e) => {
    e.preventDefault()

    this.setState({
      isPressed: true,
    })

    setTimeout(() => {
      this.setState(({ dialogClassName }) => ({
        dialogClassName: `${dialogClassName} is-active`,
      }))
    }, 100)
  }

  handleHideDialog = () => {
    this.setState({
      dialogClassName: DIALOG_CLASS_NAME,
    })

    setTimeout(() => {
      this.setState({
        isPressed: false,
      })
    }, 400)
  }

  /* -------------------------------------------------------------------------- */
  // 렌더링

  render() {
    // 전달 속성(props) item 구조 분해 할당
    const {
      id,
      image: { name, width, height, src },
      dialog: { ko, en, desc, criteria },
    } = this.props.item

    // 상태 구조 분해 할당
    const { isPressed, dialogClassName } = this.state

    // 다이얼로그 ID
    const uniqueId = `${DIALOG_CLASS_NAME}-${id}`

    // 렌더
    return (
      <li className={`${DIALOG_PREFIX}__item`}>
        <AppButton
          as="a"
          href="#"
          className={`${DIALOG_PREFIX}__button`}
          aria-haspopup="true"
          aria-pressed={isPressed}
          onClick={this.handleShowDialog}
        >
          <figure>
            <img src={src} width={width} height={height} alt="" />
            <figcaption>{name}</figcaption>
          </figure>
        </AppButton>
        <div
          className={dialogClassName}
          hidden={!isPressed}
          role="dialog"
          aria-modal="false"
          aria-labelledby={uniqueId}
        >
          <h3 className="beverageList__dialog--name" id={uniqueId}>
            {ko}
            <span lang="en">{en}</span>
          </h3>
          <p>{desc}</p>
          <div className="beverageList__dialog--multiColumn is-2">
            <dl>
              {criteria.map(([ dt, dd ], index) => (
                <Fragment key={index}>
                  <dt>{dt}</dt>
                  <dd>({dd})</dd>
                </Fragment>
              ))}
            </dl>
          </div>
          <AppButton
            type="button"
            title="닫기"
            className="resetButton is-close-dialog"
            aria-label="음료 정보 패널 닫기"
            onClick={this.handleHideDialog}
          >
            <span aria-hidden="true">×</span>
          </AppButton>
        </div>
      </li>
    )
  }
}

export default BeverageItem
