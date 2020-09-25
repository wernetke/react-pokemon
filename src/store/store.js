import React from 'react'
import { createStore,applyMiddleware  } from 'redux'
import {  Provider} from 'react-redux'
import reducer from './reducer'
import initialState from './initialState'
import thunk from 'redux-thunk'


const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default props => <Provider store={store} {...props}/>