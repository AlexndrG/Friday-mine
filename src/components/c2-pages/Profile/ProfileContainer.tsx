import React, {useEffect, useState} from 'react';
import avatarDefault from './avatar.jpg'
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

    const [profileChanged, setProfileChanged] = useState(false)


    useEffect(() => {
        return () => {
            dispatch(setAppErrorAC(''))
        }
    }, [])

    useEffect(() => {
        setIfImgError(avatar => '')
    }, [avatar])

    const nameChangeText = (value: string) => {
        setProfileChanged(true)
        setNewName(value)
    }

    const avatarChangeText = (value: string) => {
        setProfileChanged(true)
        setNewAvatar(value)
    }


    const changePress = () => {
        dispatch(changeProfileTC(newName, newAvatar))
        setProfileChanged(false)
    }

    const logoutPress = () => {
        dispatch(logoutTC())
    }

    const setIfImgErrorHandler = () => {
        setIfImgError(avatarDefault)
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
            nameChangeText={nameChangeText}
            avatarChangeText={avatarChangeText}

            changePress={changePress}
            logoutPress={logoutPress}
            ifImgError={ifImgError}
            setIfImgErrorHandler={setIfImgErrorHandler}

            profileChanged={profileChanged}
        />
    )
}