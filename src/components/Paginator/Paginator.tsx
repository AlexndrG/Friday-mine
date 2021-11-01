import React from 'react';
import s from './Paginator.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import SuperButton from '../c1-common/c2-SuperButton/SuperButton';
import {setCurrentPageAC} from '../../bll/packsReducer';

const pageButtons = ['|<', '<<', '<', '>', '>>', '>|']
const pageButtonsTitle = ['First', '-10', 'Previous', 'Next', '+10', 'Last']

export function Paginator() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.packs.packsData.cardPacksTotalCount)
    const packsPerPage = useSelector<AppRootStateType, number>(state => state.packs.packsData.pageCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.packsData.page)
    const dispatch = useDispatch()

    const totalPages = Math.ceil(cardPacksTotalCount / packsPerPage)


    const pageFunctions = [
        setCurrentPageAC(1),
        setCurrentPageAC(currentPage-10),
        setCurrentPageAC(currentPage-1),
        setCurrentPageAC(currentPage+1),
        setCurrentPageAC(currentPage+10),
        setCurrentPageAC(totalPages),
    ]
    const pageDisables = [
        function(){return currentPage===1},
        function(){return currentPage<10},
        function(){return currentPage===1},
        function(){return currentPage===totalPages},
        function(){return currentPage>totalPages-10},
        function(){return currentPage===totalPages},
    ]

    if (currentPage && totalPages) {
        return (
            <div className={s.form}>
                Page: {currentPage} of {totalPages}
                &nbsp;
                {
                    pageButtons.map((b,i) =>
                        <SuperButton
                            title={pageButtonsTitle[i]}
                            onClick={()=>dispatch(pageFunctions[i])}
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