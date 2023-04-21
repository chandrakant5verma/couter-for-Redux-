import {createStore }from 'redux'
import RootReduser from './reducers/index'

const Store = createStore(RootReduser);

export default Store;