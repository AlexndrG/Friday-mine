import React, {useEffect} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {addPackTC, delPackTC, getPacksTC, setPacksDataAC, updatePackTC} from '../../../bll/packsReducer';
import {GetPacksResponseType, PacksRequestType} from '../../../dal/packs-api';
import {setAppErrorAC} from '../../../bll/appReducer';
import {Redirect} from 'react-router-dom';

export function PacksContainer() {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const userId = useSelector<AppRootStateType, string>(state => state.app.userData._id)
    const requestPacksData = useSelector<AppRootStateType, PacksRequestType>(state => state.packs.requestPacksData)
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
            dispatch(setPacksDataAC({} as GetPacksResponseType))
        }
    }, [requestPacksData])

    const addPress = () => {
        dispatch(addPackTC())
    }

    const delPress = (id: string) => {
        dispatch(delPackTC(id))
    }

    const updatePress = (id: string) => {
        dispatch(updatePackTC(id))
    }

    if (!isLogined) {
        return <Redirect to={'/login'}/>
    }

    return (
        <>
            <Packs
                userId={userId}
                packs={packsData}
                isBusy={isBusy}
                error={error}
                addPress={addPress}
                delPress={delPress}
                updatePress={updatePress}
            />
        </>
    )
}
