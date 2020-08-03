import 'react-app-polyfill/ie11'
import 'styles/index.scss'

import React from 'react'
import { render } from 'react-dom'

import { StoreProvider } from 'store/store'
import App from 'components/App'

/**
 * @renderer
 */
render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('reactApp')
)

/**
 * @PWA
 */
if (process.env.NODE_ENV === 'production') {
  import('config/serviceWorker').then((serviceWorker) => serviceWorker.register())
}
