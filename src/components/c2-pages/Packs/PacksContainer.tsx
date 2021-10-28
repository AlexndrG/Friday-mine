import React, {useEffect} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {getPacksTC} from '../../../bll/packsReducer';
import {GetPacksResponseType, PacksRequestType} from '../../../dal/packs-api';
import {setAppErrorAC} from '../../../bll/appReducer';
import {Redirect} from 'react-router-dom';

export function PacksContainer() {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const requestData = useSelector<AppRootStateType, PacksRequestType>(state => state.packs.requestData)
    const packsData = useSelector<AppRootStateType, GetPacksResponseType>(state => state.packs.packsData)

    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLogined) {
            dispatch(getPacksTC())
        }

        return () => {
            dispatch(setAppErrorAC(''))
        }
    }, [requestData])


    if (!isLogined) {
        return <Redirect to={'/login'}/>
    }

    return (
        <>
            <Packs
                packs={packsData}
                isBusy={isBusy}
                error={error}
            />
        </>
    )
}
