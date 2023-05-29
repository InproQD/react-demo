import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from '@/App'
import { Provider } from 'react-redux'
import store from './redux/store'

// provider: 使用跨组件通信将store的数据通信给所有的组件
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
)
