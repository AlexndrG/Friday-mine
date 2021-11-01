import React from 'react';
import s from './Packs.module.css'
import {Loader} from '../../Loader/Loader';
import {GetPacksResponseType} from '../../../dal/packs-api';
import {TableLinePack} from '../../TableLinePack/TableLinePack';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {PacksPerPage} from '../../PacksPerPage/PacksPerPage';
import {MyPacksCheckBox} from '../../MyPacksCheckBox/MyPacksCheckBox';
import {Paginator} from '../../Paginator/Paginator';
import {PacksNameSearch} from '../../PacksNameSearch/PacksNameSearch';
import {DoubleRangeCardsCount} from '../../DoubleRangeCardsCount/DoubleRangeCardsCount';

type PropsType = {
    userId: string
    packsData: GetPacksResponseType
    isBusy: boolean
    error: string
    sortPress: (sortString: string) => void
    sortName: string
    addPress: () => void
    delPress: (id: string) => void
    updatePress: (id: string) => void
}

export function Packs(props: PropsType) {
    const sortButton = (sortParameter: string, buttonName: string, title: string) => {
        return (
            <SuperButton
                className={s.buttonSort + ' ' + (sortParameter === props.sortName ? s.sortButtonActive : '')}
                onClick={() => props.sortPress(sortParameter)}
                title={title}
                disabled={props.isBusy}
            >
                {buttonName}
            </SuperButton>
        )
    }

    const sortButtons = (sortParameter: string) => {
        return [
            // sortButton('1' + sortParameter, '?'),
            // sortButton('0' + sortParameter, String.fromCharCode(191)),
            sortButton('1' + sortParameter, '<', 'Ascending'),
            sortButton('0' + sortParameter, '>', 'Descending'),
        ]
    }

    return (
        <div className={s.main}>
            <div className={s.titlePropgressError}>
                <h1>Packs</h1>
                {
                    props.isBusy &&
                    <div>
                        <Loader/>
                    </div>
                }
                {
                    props.error &&
                    <div className={s.error}>
                        {props.error}
                    </div>
                }
            </div>

            <div className={s.form}>

                <div className={s.headBlocks}>
                    <div className={s.headBlockLeft}>
                        <PacksNameSearch/>
                    </div>
                    <div className={s.headBlockRight}>
                        <DoubleRangeCardsCount/>
                    </div>
                </div>


                <TableLinePack
                    head={true}
                    nameFieldName={'Name'}
                    nameFieldLink={''}
                    nameFieldButtons={sortButtons('name')}
                    cardsCountField={'Cards count'}
                    cardsCountFieldButtons={sortButtons('cardsCount')}
                    updatedField={'Updated'}
                    updatedFieldButtons={sortButtons('updated')}
                    buttonsFieldName={'Actions: '}
                    buttonsFieldButtons={
                        [
                            <SuperButton
                                onClick={props.addPress}
                                disabled={props.isBusy}
                            >Add</SuperButton>,
                        ]
                    }
                />

                {
                    props.packsData.cardPacks &&
                    props.packsData.cardPacks.map(c =>
                        <TableLinePack
                            key={c._id}
                            head={false}
                            nameFieldName={c.name}
                            nameFieldLink={c._id}
                            nameFieldButtons={[]}
                            cardsCountField={'' + c.cardsCount}
                            cardsCountFieldButtons={[]}
                            updatedField={c.updated.substr(0, 10) + ' ' + c.updated.substr(11, 8)}
                            updatedFieldButtons={[]}
                            buttonsFieldName={''}
                            buttonsFieldButtons={
                                [
                                    <SuperButton
                                        className={s.buttonActions}
                                        onClick={() => props.delPress(c._id)}
                                        disabled={props.isBusy || c.user_id !== props.userId}
                                    >Del</SuperButton>,
                                    <SuperButton
                                        className={s.buttonActions}
                                        onClick={() => props.updatePress(c._id)}
                                        disabled={props.isBusy || c.user_id !== props.userId}
                                    >Update</SuperButton>,
                                    <SuperButton
                                        // onClick={}
                                        disabled={props.isBusy}
                                    >Learn</SuperButton>,
                                ]
                            }
                        />
                    )
                }

                <div className={s.footBlocks}>
                    <div className={s.footBlockLeft}>
                        <MyPacksCheckBox/>
                        <PacksPerPage/>
                    </div>
                    <div className={s.footBlockRight}>
                        <Paginator/>
                    </div>
                </div>
            </div>

        </div>
    )
}