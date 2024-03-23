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

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString),
//   }
// }

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware)

const store = createStore(rootReducer, undefined, middlewareEnhancer)

export default store
