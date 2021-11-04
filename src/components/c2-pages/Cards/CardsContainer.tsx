import React, {ReactNode, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {Redirect, useParams} from 'react-router-dom';
import {Cards} from './Cards';
import {setAppErrorAC} from '../../../bll/appReducer';
import {addCardTC, delCardTC, getCardsTC, setSortCardsAC, updateCardTC} from '../../../bll/cardsReducer';
import {CardsRequestType, GetCardsResponseType} from '../../../dal/cards-api';
import {ModalWindow} from '../../ModalWindow/ModalWindow';
import {CardAddUpdateModal} from '../Cards-modals/CardAddUpdateModal';
import {CardDeleteModal} from '../Cards-modals/CardDeleteModal';

export function CardsContainer() {
    const isLogined = useSelector<AppRootStateType, boolean>(state => state.app.isLogined)
    const userId = useSelector<AppRootStateType, string>(state => state.app.userData._id)
    const requestCardsData = useSelector<AppRootStateType, CardsRequestType>(state => state.cards.requestCardsData)
    const cardsData = useSelector<AppRootStateType, GetCardsResponseType>(state => state.cards.cardsData)
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)

    const {cardsPackId} = useParams<{ cardsPackId: string }>()

    const dispatch = useDispatch()

    const [modalActive, setModalActive] = useState(false)
    const [modalContent, setModalContent] = useState<ReactNode>(<></>)

    useEffect(() => {
        if (isLogined) {
            dispatch(getCardsTC(cardsPackId))
        }

        return () => {
            dispatch(setAppErrorAC(''))
        }
    }, [requestCardsData])

    const sortPress = (sortString: string) => {
        dispatch(setSortCardsAC(sortString))
    }

    const addPress = () => {
        // dispatch(addCardTC(cardsPackId))
        setModalContent(
            <CardAddUpdateModal
                add={true}
                packId={cardsPackId}
                cardId={''}
                question={''}
                answer={''}
                setActive={setModalActive}
                dispatchFunction={addCardTC}
            />
        )
        setModalActive(true)
    }

    const delPress = (id: string, question: string) => {
        // dispatch(delCardTC(cardsPackId, id))
        setModalContent(
            <CardDeleteModal
                packId={cardsPackId}
                cardId={id}
                question={question}
                setActive={setModalActive}
                dispatchFunction={delCardTC}
            />
        )
        setModalActive(true)
    }

    const updatePress = (id: string, question: string, answer: string) => {
        // dispatch(updateCardTC(cardsPackId, id))
        setModalContent(
            <CardAddUpdateModal
                add={false}
                packId={cardsPackId}
                cardId={id}
                question={question}
                answer={answer}
                setActive={setModalActive}
                dispatchFunction={updateCardTC}
            />
        )
        setModalActive(true)
    }

    if (!isLogined) {
        return <Redirect to={'/login'}/>
    }

    return (
        <>
            <Cards
                userId={userId}
                cardsData={cardsData}
                isBusy={isBusy}
                error={error}
                sortPress={sortPress}
                sortName={requestCardsData.sortCards || ''}
                addPress={addPress}
                delPress={delPress}
                updatePress={updatePress}
            />

            <ModalWindow active={modalActive} modalContent={modalContent}/>
        </>
    )
}