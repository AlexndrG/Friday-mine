import React from 'react';
import s from './PacksPerPage.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {setPacksPerPageAC} from '../../bll/packsReducer';

const perPageArr = [5, 10, 15]

export function PacksPerPage() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const pageCount = useSelector<AppRootStateType, number | undefined>(state => state.packs.requestPacksData.pageCount) || perPageArr[1]
    const dispatch = useDispatch()

    return (
        <div className={s.form}>
            <div className={s.itemText}>Packs per page:</div>
            {perPageArr.map(p =>
                <div
                    className={s.item + ' ' + (p === pageCount ? s.itemActive : '')}
                    onClick={() => {
                        if (!isBusy && p !== pageCount) dispatch(setPacksPerPageAC(p))
                    }}
                >
                    {p}
                </div>)
            }
        </div>
    )
}