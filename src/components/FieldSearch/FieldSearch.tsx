import React, {useEffect, useState} from 'react';
import s from './FieldSearch.module.css';
import SuperInputText from '../c1-common/c1-SuperInputText/SuperInputText';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {setPackNameSearchAC} from '../../bll/packsReducer';
import {setCardAnswerSearchAC, setCardQuestionSearchAC} from '../../bll/cardsReducer';

type PropsType = {
    searchField: 'PackName' | 'CardQuestion' | 'CardAnswer'
    nameText: string
}

export function FieldSearch(props: PropsType) {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const packName = useSelector<AppRootStateType, string | undefined>(state => state.packs.requestPacksData.packName) || ''
    const cardQuestion = useSelector<AppRootStateType, string | undefined>(state => state.cards.requestCardsData.cardQuestion) || ''
    const cardAnswer = useSelector<AppRootStateType, string | undefined>(state => state.cards.requestCardsData.cardAnswer) || ''
    const dispatch = useDispatch()

    const initText = props.searchField === 'PackName'
        ? packName
        : props.searchField === 'CardQuestion'
            ? cardQuestion
            : cardAnswer
    const [search, setSearch] = useState<string>(initText)

    useEffect(() => {
        if (search !== initText) {
            const timerId = setTimeout(() => {
                if (props.searchField === 'PackName') {
                    dispatch(setPackNameSearchAC(search))
                } else if (props.searchField === 'CardQuestion') {
                    dispatch(setCardQuestionSearchAC(search))
                } else {
                    dispatch(setCardAnswerSearchAC(search))
                }
            }, 1500)

            return () => {
                clearInterval(timerId)
            }
        }
    }, [search])

    return (
        <div className={s.form}>
            {props.nameText} &nbsp;
            <SuperInputText
                value={search}
                size={20}
                onChange={(e) => setSearch(e.currentTarget.value)}
                disabled={isBusy}
            />
        </div>
    )
}