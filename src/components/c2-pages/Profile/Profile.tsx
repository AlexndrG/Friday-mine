import React from 'react';
import s from './Profile.module.css'
import avatar from './avatar.jpg'
import {LoginResponseType} from '../../../dal/cards-api';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {Loader} from '../../Loader/Loader';

type PropsType = {
    isBusy: boolean
    error: string
    userData: LoginResponseType
    logoutPress: () => void
    ifImgError: string
    setIfImgError: (avatar: string) => void
}

export function Profile(props: PropsType) {
    return (
        <div className={s.main}>
            <h1>Profile</h1>

            <div className={s.form}>
                <div className={s.item}>
                    <img
                        className={s.photo}
                        src={props.ifImgError || props.userData.avatar || avatar}
                        onError={() => props.setIfImgError(avatar)}
                    />
                </div>

                <div className={s.item}>
                    <b>Name:</b>{` ${props.userData.name}`}
                </div>

                <div className={s.item}>
                    <b>Email:</b>{` ${props.userData.email}`}
                </div>

                <div className={s.item}>
                    <b>Avatar link:</b>{` ${props.userData.avatar}`}
                </div>


                <div className={s.item}>
                    <br/>
                    <SuperButton
                        onClick={props.logoutPress}
                        disabled={props.isBusy}
                    >
                        Logout
                    </SuperButton>
                </div>
            </div>

            {props.isBusy &&
            <div>
                <Loader/>
            </div>}

            {props.error &&
            <div className={s.error}>
                {props.error}
            </div>}

        </div>
    )
}