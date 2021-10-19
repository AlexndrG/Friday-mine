import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {LoginResponseType} from '../../../dal/cards-api';
import {Profile} from './Profile';
import {setAppErrorAC} from '../../../bll/appReducer';
import { Redirect } from 'react-router-dom';
import {logoutTC} from '../../../bll/profileReducer';

export function ProfileContainer() {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const userData = useSelector<AppRootStateType, LoginResponseType>(state => state.app.userData)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setAppErrorAC(''))
        }
    }, [])

    const logoutPress = () => {
        dispatch(logoutTC())
    }


    if (!isLogined) {
        return <Redirect to={'/login'}/>
    }

    return (
        <Profile
            isBusy={isBusy}
            error={error}
            userData={userData}
            logoutPress={logoutPress}
        />
    )
}