import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk]

const preloadedState = {}

let store

if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, compose(applyMiddleware(...middleware)))
} else {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        ...middleware
      ) /* ,
      // Redux devtools don't work in Android
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() */
    )
  )
}

export default store
