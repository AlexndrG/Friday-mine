import React from 'react';
import s from './PerPage.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {setPacksPerPageAC} from '../../bll/packsReducer';
import {setCardsPerPageAC} from '../../bll/cardsReducer';

const perPageArr = [5, 10, 15, 20]

type PropsType = {
    packs: boolean
    nameText: string
}

export function PerPage(props: PropsType) {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const packsCount = useSelector<AppRootStateType, number>(state => state.packs.requestPacksData.pageCount)
    const cardsCount = useSelector<AppRootStateType, number>(state => state.cards.requestCardsData.pageCount)
    const dispatch = useDispatch()

    const activeCount = props.packs ? packsCount : cardsCount

    return (
        <div className={s.form}>
            <div className={s.itemText}>{props.nameText}</div>
            {perPageArr.map((p, i) =>
                <div
                    key={i}
                    className={s.item + ' ' + (p === activeCount ? s.itemActive : '')}
                    onClick={() => {
                        if (!isBusy && p !== activeCount) {
                            props.packs
                                ? dispatch(setPacksPerPageAC(p))
                                : dispatch(setCardsPerPageAC(p))
                        }
                    }}
                >
                    {p}
                </div>)
            }
        </div>
    )
}