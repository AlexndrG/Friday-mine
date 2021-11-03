import React from 'react';
import s from './MyPacksCheckBox.module.css'
import SuperCheckbox from '../c1-common/c3-SuperCheckbox/SuperCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {setMyPacksCheckBoxAC} from '../../bll/packsReducer';


export function MyPacksCheckBox() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const id = useSelector<AppRootStateType, string>(state => state.app.userData._id)
    const requestUserId = useSelector<AppRootStateType, string>(state => state.packs.requestPacksData.user_id)
    const dispatch = useDispatch()

    return (
        <div className={s.form}>
            My packs
            <SuperCheckbox
                checked={!!requestUserId}
                onClick={
                    (e) =>
                        dispatch(setMyPacksCheckBoxAC(e.currentTarget.checked ? id: ''))
                }
                disabled={isBusy}
            />
        </div>
    )
}