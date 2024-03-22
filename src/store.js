import { compose, createStore } from 'redux'
import rootReducer from './reducer'
import {
  includeMeaningOfLife,
  sayHiOnDispatch,
} from './exampleAddons/enhancers'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  }
}

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
