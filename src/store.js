import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, composedEnhancer)

export default store
