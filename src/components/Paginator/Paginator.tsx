import React from 'react';
import s from './Paginator.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import SuperButton from '../c1-common/c2-SuperButton/SuperButton';
import {setCurrentPackPageAC} from '../../bll/packsReducer';
import {setCurrentCardPageAC} from '../../bll/cardsReducer';

const pageButtons = ['|<', '<<', '<', '>', '>>', '>|']
const pageButtonsTitle = ['First', '-10', 'Previous', 'Next', '+10', 'Last']

type PropsType = {
    packs: boolean
}

export function Paginator(props: PropsType) {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const packsTotalCount = useSelector<AppRootStateType, number>(state => state.packs.packsData.cardPacksTotalCount)
    const packsPerPage = useSelector<AppRootStateType, number>(state => state.packs.packsData.pageCount)
    const packsCurrentPage = useSelector<AppRootStateType, number>(state => state.packs.packsData.page)
    const cardsTotalCount = useSelector<AppRootStateType, number>(state => state.cards.cardsData.cardsTotalCount)
    const cardsPerPage = useSelector<AppRootStateType, number>(state => state.cards.cardsData.pageCount)
    const cardsCurrentPage = useSelector<AppRootStateType, number>(state => state.cards.cardsData.page)
    const dispatch = useDispatch()

    const totalPages = props.packs
        ? Math.ceil(packsTotalCount / packsPerPage)
        : Math.ceil(cardsTotalCount / cardsPerPage)

    const currentPage = props.packs
        ? packsCurrentPage
        : cardsCurrentPage

    const setCurrentFunction = props.packs
        ? setCurrentPackPageAC
        : setCurrentCardPageAC

    const pageFunctions = [
        setCurrentFunction(1),
        setCurrentFunction(currentPage - 10),
        setCurrentFunction(currentPage - 1),
        setCurrentFunction(currentPage + 1),
        setCurrentFunction(currentPage + 10),
        setCurrentFunction(totalPages),
    ]

    const pageDisables = [
        function () {
            return currentPage === 1
        },
        function () {
            return currentPage < 10
        },
        function () {
            return currentPage === 1
        },
        function () {
            return currentPage === totalPages
        },
        function () {
            return currentPage > totalPages - 10
        },
        function () {
            return currentPage === totalPages
        },
    ]

    if (currentPage && totalPages) {
        return (
            <div className={s.form}>
                Page: {currentPage} of {totalPages}
                &nbsp;
                {
                    pageButtons.map((b, i) =>
                        <SuperButton
                            title={pageButtonsTitle[i]}
                            onClick={() => dispatch(pageFunctions[i])}
                            disabled={isBusy || pageDisables[i]()}
                        >
                            {b}
                        </SuperButton>)
                }
            </div>
        )
    }

    return <></>
}