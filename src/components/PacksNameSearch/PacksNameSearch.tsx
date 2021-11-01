import React, {useEffect, useState} from 'react';
import s from './PacksNameSearch.module.css';
import SuperInputText from '../c1-common/c1-SuperInputText/SuperInputText';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {setNameSearchAC} from '../../bll/packsReducer';

export function PacksNameSearch() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const packName = useSelector<AppRootStateType, string | undefined>(state => state.packs.requestPacksData.packName) || ''
    const dispatch = useDispatch()

    const [search, setSearch] = useState<string>(packName)

    useEffect(() => {
        if (search !== packName) {
            const timerId = setTimeout(() => {
                dispatch(setNameSearchAC(search))
            }, 1500)

            return () => {
                clearInterval(timerId)
            }
        }
    }, [search])

    return (
        <div className={s.form}>
            Name search: &nbsp;
            <SuperInputText
                value={search}
                size={30}
                onChange={(e) => setSearch(e.currentTarget.value)}
                disabled={isBusy}
            />
        </div>
    )
}