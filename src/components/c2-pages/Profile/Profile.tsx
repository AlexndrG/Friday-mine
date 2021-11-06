import React from 'react';
import s from './Profile.module.css'
import avatarDefault from './avatar.jpg'
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {Loader} from '../../Loader/Loader';
import SuperEditableSpan from '../../c1-common/c4-SuperEditableSpan/SuperEditableSpan';


type PropsType = {
    isBusy: boolean
    error: string
    email: string
    avatar: string
    newName: string
    newAvatar: string

    nameChangeText: (value: string) => void
    avatarChangeText: (value: string) => void
    changePress: () => void
    logoutPress: () => void

    ifImgError: string
    setIfImgErrorHandler: () => void

    profileChanged: boolean
}

export function Profile(props: PropsType) {
    return (
        <div className={s.main}>
            <div className={s.titleProgressError}>
                <h1>Profile</h1>
                {
                    props.isBusy &&
                    <div>
                        <Loader/>
                    </div>
                }
                {
                    props.error &&
                    <div className={s.error}>
                        {props.error}
                    </div>
                }
            </div>

            <div className={s.form}>
                <div className={s.item}>
                    <img
                        className={s.photo}
                        src={props.ifImgError || props.avatar || avatarDefault}
                        onError={props.setIfImgErrorHandler}
                        alt={'Avatar'}
                    />
                </div>

                <div className={s.item}>
                    <b>Email:</b>{` ${props.email}`}
                </div>

                <div className={s.item}>
                    <b>Name:</b>
                    <div>
                        <SuperEditableSpan
                            inputArea={true}
                            value={props.newName}
                            onChangeText={props.nameChangeText}
                            disabled={props.isBusy}
                            size={50}
                        />
                    </div>
                </div>

                <div className={s.item}>
                    <b>Avatar link:</b>
                    <div>
                        <SuperEditableSpan
                            inputArea={false}
                            value={props.newAvatar}
                            onChangeText={props.avatarChangeText}
                            disabled={props.isBusy}
                        />
                    </div>
                </div>


                <div className={s.item}>
                    <br/>
                    <SuperButton
                        onClick={props.changePress}
                        disabled={!props.profileChanged || props.isBusy}
                    >
                        Change profile
                    </SuperButton>
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

        </div>
    )
}