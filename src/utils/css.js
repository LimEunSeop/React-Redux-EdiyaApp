/**
 * css() 함수는 css`...`  형식으로 CSS 코드를 전달 받아 
 * CSS_MAP {} 형식(JavaScript 객체)으로 반환합니다.
 * 
 * @param {Array} o CSS 선언 텍스트를 포함하는 배열
 * 
 * @example
 * const AppLoadingStyles = css`
 *   position: fixed;
 *   top: 50%;
 *   left: 50%;
 *   width: 120px;
 *   height: 120px;
 *   transform: translate(-50%, -50%);
 * `
 */
export default function css(o) {
  // css() 함수 로직을 작성하세요.
  const cssArray = o[0]
    .split(';')
    .map((cssRule) => cssRule.trim())
    .filter((cssRule) => cssRule.length > 0)

  return cssArray.reduce((cssMap, cssRule) => {
    const [ key, value ] = cssRule.split(':')
    cssMap[key] = value.trim()
    return cssMap
  }, {})
}
