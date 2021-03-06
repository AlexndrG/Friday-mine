import React, {useEffect} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Routes} from './components/c2-pages/Routes/Routes';
import {AppRootStateType} from './bll/store';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from './components/Loader/Loader';
import {initializeTC} from './bll/appReducer';

export function App() {
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const isRestoring = useSelector<AppRootStateType, boolean>(state => state.passwordRestore.isRestoring)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeTC())
    }, [])


    if (!isInitialized) {
        return (
            <div className={'init'}>
                <Loader/>
            </div>
        )
    }

    return (
        <div>
            <Header isLogined={isLogined} isRestoring={isRestoring}/>
            <Routes/>
            {/*<Redirect to={isLogined ? '/profile' : '/login'}/>*/}
        </div>
    )
}
