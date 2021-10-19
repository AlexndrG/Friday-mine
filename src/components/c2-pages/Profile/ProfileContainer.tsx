import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {LoginResponseType} from '../../../dal/cards-api';
import {Profile} from './Profile';
import {setAppErrorAC} from '../../../bll/appReducer';
import {Redirect} from 'react-router-dom';
import {changeProfileTC, logoutTC} from '../../../bll/profileReducer';


export function ProfileContainer() {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const {email, name, avatar} = useSelector<AppRootStateType, LoginResponseType>(state => state.app.userData)
    const dispatch = useDispatch()

    const [newName, setNewName] = useState(name)
    const [newAvatar, setNewAvatar] = useState(avatar || 'none')

    const [ifImgError, setIfImgError] = useState('')

    useEffect(() => {
        return () => {
            dispatch(setAppErrorAC(''))
        }
    }, [])

    useEffect(() => {
        return () => {
            setIfImgError(avatar => '')
        }
    }, [avatar])



    const changePress = () => {
        dispatch(changeProfileTC(newName, newAvatar))
    }

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
            email={email}
            newName={newName}
            avatar={avatar || 'none'}
            newAvatar={newAvatar}
            nameChange={setNewName}
            avatarChange={setNewAvatar}

            changePress={changePress}
            logoutPress={logoutPress}
            ifImgError={ifImgError}
            setIfImgError={setIfImgError}
        />
    )
}