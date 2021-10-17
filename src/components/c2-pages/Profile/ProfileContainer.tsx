import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {Redirect} from 'react-router-dom';
import {Profile} from './Profile';
import {LoginResponseType} from '../../../dal/api-login';
import {logoutTC, setProfileErrorAC} from '../../../bll/profileReducer';

export function ProfileContainer() {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.login.isLogined)
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.profile.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.profile.error)
    const userData = useSelector<AppRootStateType, LoginResponseType>(state => state.app.userData)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setProfileErrorAC(''))
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