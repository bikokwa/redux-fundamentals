import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducer'

const delayedMessageMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload)
    }, 1000)
  }
  return next(action)
}

const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware)

const store = createStore(rootReducer, undefined, middlewareEnhancer)

export default store
