import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import './api/server'
import store from './store'
import { fetchTodos } from './features/todos/todosSlice'
import { Provider } from 'react-redux'

store.dispatch(fetchTodos())

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
