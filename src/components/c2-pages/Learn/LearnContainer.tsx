import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {Redirect, useParams} from 'react-router-dom';
import {Learn} from './Learn';
import {setAppErrorAC} from '../../../bll/appReducer';
import {getLearnCardsTC} from '../../../bll/learnReducer';

export function LearnContainer() {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)

    const {cardsPackId} = useParams<{ cardsPackId: string }>()

    const dispatch = useDispatch()

    useEffect(() => {
        if (isLogined) {
            dispatch(getLearnCardsTC(cardsPackId))
        }

        return () => {
            dispatch(setAppErrorAC(''))
        }
    }, [])


    if (!isLogined) {
        return <Redirect to={'/login'}/>
    }

    return (
        <>
            <Learn
                isBusy={isBusy}
                error={error}
            />
        </>
    )
}