import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {Redirect, useParams} from 'react-router-dom';
import { Cards } from './Cards';
import {setAppErrorAC} from '../../../bll/appReducer';
import {getCardsTC, setCardsDataAC} from '../../../bll/cardsReducer';
import {CardsRequestType, GetCardsResponseType} from '../../../dal/cards-api';

export function CardsContainer () {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const requestCardsData = useSelector<AppRootStateType, CardsRequestType>(state => state.cards.requestCardsData)
    const cardsData = useSelector<AppRootStateType, GetCardsResponseType>(state => state.cards.cardsData)
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)

    const {cardsPackId} = useParams<{cardsPackId: string}>()

    const dispatch = useDispatch()

    useEffect(() => {
        if (isLogined) {
            dispatch(getCardsTC(cardsPackId))

        }

        return () => {
            dispatch(setAppErrorAC(''))
            dispatch(setCardsDataAC({} as GetCardsResponseType))
        }
    }, [requestCardsData])



    if (!isLogined) {
        return <Redirect to={'/login'}/>
    }

    return (
        <>
            <Cards
                cards={cardsData}
                isBusy={isBusy}
                error={error}
            />

        </>
    )
}