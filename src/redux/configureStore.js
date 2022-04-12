import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidDataReducer from './covid/covidReducer';

export default createStore(covidDataReducer, applyMiddleware(thunk, logger));
