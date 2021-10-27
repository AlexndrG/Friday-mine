import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk';
import {loginReducer} from './loginReducer'
import {profileReducer} from './profileReducer'
import {registerReducer} from './registerReducer'
import {passwordNewReducer} from './passwordNewReducer';
import {passwordRestoreReducer} from './passwordRestoreReducer';
import {appReducer} from './appReducer';
import {packsReducer} from './packsReducer';

const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    passwordRestore: passwordRestoreReducer,
    passwordNew: passwordNewReducer,
    packs: packsReducer,
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store

export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
