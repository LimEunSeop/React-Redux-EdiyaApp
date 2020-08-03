# React-Redux 를 적용한 Ediya Coffee 앱

## 사용 기술
- Component : Class Component, Functional Component + Hook
- FrontEnd : React, SASS, CSS-IN-JS
- Database : 로컬에 json 파일 만들어 모의DB 구성
- MiddleWares : redux-devtools-extension
- Modules : react-redux, styled-components, classnames, prop-types

## 구현 기능
- Menu Item Listing 및 Detail View
- GotoTop 아이콘 기능
- 키보드 접근성을 준수한 Navigation Bar

### Menu Item Listing 및 Detail View
![](https://github.com/LimEunSeop/assets/blob/master/images/react-redux-ediyaapp/EdiyaApp-item-상세보기.gif?raw=true)

### GotoTop 아이콘 기능
![](https://github.com/LimEunSeop/assets/blob/master/images/react-redux-ediyaapp/EdiyaApp-GotoTop-기능.gif?raw=true)

### 키보드 접근성을 준수한 Navigation Bar
![](https://github.com/LimEunSeop/assets/blob/master/images/react-redux-ediyaapp/EdiyaApp-Navigation-키보드-접근성-준수.gif?raw=true)

## 프로젝트 순서
1. 전통적인 HTML + CSS + JS 로 앱 구현
2. React 컴포넌트로 변환하여 React 프로젝트에 임포트
3. 상태관리 라이브러리 적용

> 공부를 위해
> 1. 단순 scss import 하는 방식으로 스타일링 해본 후 몇 컴포넌트를 CSS-IN-JS 로 변환시켜 모듈화를 강화해 보았고
> 2. Context API + userReducer Hook 으로 상태관리를 해본 후 react-redux 로 변환시키는 작업을 하여
> 약간의 다양한 변칙을 가해 가며 공부했습니다.

## 공부내용 Memo
### 비동기 처리
- promise chain : 얘네 체인 한 세트가 비동기로 돌아감. 물론 체인은 순서가 지켜지겠지만. 기본적으로 Job 단위로 non-block 이지만, Job 마저도 non-block 하고싶으면 Job 안에 비동기함수 실행하여 Promise 를 Pending 상태로 만들면 됨.
- async 함수 : 이 함수 자체가 비동기로 돌아감. 즉 이 함수가 호출되는 위치에서 비동기로 인식한다는거. async 함수 내에서는 순서가 물론 지켜짐. 내부에서 호출되는 비동기함수 앞에 await 붙여서 철저히 데이터 올 때까지 기다린다. 이로써 promise chain 에서 못 이룬 environment record 유지 및 사용이 가능해짐.

이 둘의 조합이 와도 어떻게 돌아갈지 감이 오겠지?

### css url 을 js 에서 쓴다면?
css 안에서는 src 디렉터리를 ~로 접근했지만 js로 오면 import 한 문자열을 가져와서 인터폴레이션 해야함. require 하면 인라인으로 더 편하게 주소 가져올 수 있음.

### svg 최적화
svg 최적화는 필수이다.
웹 :  svgomg 서비스 이용. xmlns 속성 필히 정의
로컬 : svgo 라는 node 모듈 이용

### forwardRef
ref 속성을 React 컴포넌트도 받고자 할때. 예를들어 버튼을 감싼 컴포넌트인 경우 button 요소에 ref 연결시켜 DOM 조작 하고 싶을때 forwardRef HOC 로  forwardRef 컴포넌트를 만듬. forwardRef 컴포넌트는 2번째 인자로 ref 를 받을 수 있게됨. 부모가 forwardRef 컴포넌트면 자손도 forwardRef 가 됨. props 에 전달 안됨. props로 하면 null 로 나오지도 않음. 무조건 이런 특별한 공정을 거쳐야됨. forwardRef 만들면 자식은 Anonymous 되니 필히 displayName 속성을 정의하는 것을 습관으로 하자.

**클래스 컴포넌트에(함수 X) ref 속성을 주면 클래스 컴포넌트 인스턴스를 그대로 참조할 수 있게 됩니다. 따라서 forwardRef 하지 않아도 컴포넌트 내에서 ref 를 새로 정의하여 ref.current.ref.current 식으로 체이닝을 통해 실제DOM 에 접근 가능하긴 합니다. 하지만 유연함을 위해 forwardRef 를 적극 활용하는건 어떨까요?? (forwardRef 를 사용하기 시작한 순간 ref 의 대상 요소를 정해줘야합니다. 클래스 인스턴스에 접근 안돼요~)**

> forwardRef 의 인자로는 함수 컴포넌트가 와야합니다. 따라서 클래스컴포넌트에 forwardRef 하고싶은 경우 아래와 같이 함수 컴포넌트로 래핑해야 합니다.
> ```jsx
> class ElemComponent extends Component {
>   render() {
>     return {
>       <div ref={this.props.innerRef}>
>         Div has ref
>       </div>
>     }
>   }
> }
>
> export default React.forwardRef((props, ref) => <ElemComponent
>   innerRef={ref} {...props}
> />)
> ```

### createPortal
body 아랫쪽 스크립트에 의존있을때, Toast 알림 접근성 설정할때(Vritual DOM Rendering으로는 Screen Reader 감지 불가)

### as속성 
스타일컴포넌트의 에 as 속성 부여하면 요소체인지 가능 (실제 엘리먼트도 가능한가?)

### 상태관리패턴1 [Context API + useReducer()]
useReducer 사용하여 reducer, initState 받은 후 state, dispatch 받아내어 Context API Provider 의 value 로 전달해줌(store 모듈 측에서 Provider 를 리턴해주면 좋음). 각 컴포넌트는 context 를 받아내어 state 리딩, dispatch 작업 수행.

### 상태관리패턴2 [Redux + React Redux + Redux Devtools Extensions]
우리가 많이 해왔던것. 이전에서 많이 다뤘으므로 생략. 흥미로운건 store 에서 Provider 에 store 결합하여 리턴한다는것. 그리고 이거 짱중요
```jsx
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools()) 
```
store 만들때 이 작업 꼭 해주기. 크롬에서 디버깅 하려면 꼭 필요. 클래스 컴포넌트만 됨. 미들웨어 연결할 수 있다는데 나중에 필요할때 문서 찾기.

아 그리고 functional component 에도 reduxmap 되던데? 

### NEXT UP
Redux Hooks (useSelector, useDispatch, createSelector), Redux Thunk 학습