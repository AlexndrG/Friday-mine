import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {Redirect, useParams} from 'react-router-dom';
import {Learn} from './Learn';
import {setAppErrorAC} from '../../../bll/appReducer';
import {CardInfo, getLearnCardsTC, getRandomLearnCardAC} from '../../../bll/learnReducer';

export function LearnContainer() {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const isLearnDataLoaded = useSelector<AppRootStateType, boolean>(state => state.learn.learnDataLoaded)
    const currentLearnCard = useSelector<AppRootStateType, CardInfo>(state => state.learn.currentLearnCard)

    const {cardsPackId} = useParams<{ cardsPackId: string }>()

    const dispatch = useDispatch()

    useEffect(() => {
        if (isLogined) {
            dispatch(getLearnCardsTC(cardsPackId, 1, -1))
        }

        return () => {
            dispatch(setAppErrorAC(''))
        }
    }, [])

    useEffect(() => {
        if (isLearnDataLoaded) {
            dispatch(getRandomLearnCardAC())
        }
    }, [isLearnDataLoaded])


    if (!isLogined) {
        return <Redirect to={'/login'}/>
    }

    return (
        <>
            <Learn
                isBusy={isBusy}
                error={error}
                currentLearnCard={currentLearnCard}
            />
        </>
    )
}