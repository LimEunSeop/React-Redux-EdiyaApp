import React from 'react'
import styled from 'styled-components'

import A11yHidden from 'components/A11yHidden/A11yHidden'
import BeverageList from 'components/BeverageList/BeverageList'

const StyledMain = styled.main`
  margin-top: 90px;
  max-width: 960px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`

StyledMain.displayName = 'StyledMain'

/**
 * @function AppMain
 */
const AppMain = () => (
  <StyledMain>
    <A11yHidden as="h2">이디야 음료</A11yHidden>
    <BeverageList />
  </StyledMain>
)

export default AppMain
