import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducer'

import { print1, print2, print3 } from './exampleAddons/middleware'

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString),
//   }
// }

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

const store = createStore(rootReducer, undefined, middlewareEnhancer)

export default store
