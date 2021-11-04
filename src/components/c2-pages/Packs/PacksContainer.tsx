import React, {ReactNode, useEffect, useState} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {addPackTC, delPackTC, getPacksTC, setSortPacksAC, updatePackTC} from '../../../bll/packsReducer';
import {GetPacksResponseType, PacksRequestType} from '../../../dal/packs-api';
import {setAppErrorAC} from '../../../bll/appReducer';
import {Redirect} from 'react-router-dom';
import {ModalWindow} from '../../ModalWindow/ModalWindow';
import {PackAddUpdateModal} from '../Packs-modals/PackAddUpdateModal';
import {PackDeleteModal} from '../Packs-modals/PackDeleteModal';

export function PacksContainer() {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const userId = useSelector<AppRootStateType, string>(state => state.app.userData._id)
    const requestPacksData = useSelector<AppRootStateType, PacksRequestType>(state => state.packs.requestPacksData)
    const packsData = useSelector<AppRootStateType, GetPacksResponseType>(state => state.packs.packsData)

    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const dispatch = useDispatch()

    const [modalActive, setModalActive] = useState(false)
    const [modalContent, setModalContent] = useState<ReactNode>(<></>)

    const [learn, setLearn] = useState('')

    useEffect(() => {
        if (isLogined) {
            dispatch(getPacksTC())
        }

        return () => {
            dispatch(setAppErrorAC(''))
            // dispatch(setPacksDataAC({} as GetPacksResponseType))
        }
    }, [requestPacksData])

    const sortPress = (sortString: string) => {
        dispatch(setSortPacksAC(sortString))
    }

    const addPress = () => {
        // dispatch(addPackTC())
        setModalContent(
            <PackAddUpdateModal
                add={true}
                id={''}
                name={''}
                setActive={setModalActive}
                dispatchFunction={addPackTC}
            />
        )
        setModalActive(true)
    }

    const delPress = (id: string, name: string) => {
        // dispatch(delPackTC(id))
        setModalContent(
            <PackDeleteModal
                id={id}
                name={name}
                setActive={setModalActive}
                dispatchFunction={delPackTC}
            />
        )
        setModalActive(true)
    }

    const updatePress = (id: string, name: string) => {
        // dispatch(updatePackTC(id))
        setModalContent(
            <PackAddUpdateModal
                add={false}
                id={id}
                name={name}
                setActive={setModalActive}
                dispatchFunction={updatePackTC}
            />
        )
        setModalActive(true)
    }

    const learnPress = (id: string) => {
        setLearn(id)
    }


    if (!isLogined) {
        return <Redirect to={'/login'}/>
    }

    if (learn) {
        return <Redirect to={'/learn/' + learn}/>
    }


    return (
        <>
            <Packs
                userId={userId}
                packsData={packsData}
                isBusy={isBusy}
                error={error}
                sortPress={sortPress}
                sortName={requestPacksData.sortPacks || ''}
                addPress={addPress}
                delPress={delPress}
                updatePress={updatePress}
                learnPress={learnPress}
            />

            <ModalWindow active={modalActive} modalContent={modalContent}/>
        </>
    )
}
