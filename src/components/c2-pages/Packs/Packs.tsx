import React from 'react';
import s from './Packs.module.css'
import {Loader} from '../../Loader/Loader';
import {GetPacksResponseType} from '../../../dal/packs-api';
import {TableLinePack} from '../../TableLinePack/TableLinePack';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {PerPage} from '../../PerPage/PerPage';
import {MyPacksCheckBox} from '../../MyPacksCheckBox/MyPacksCheckBox';
import {Paginator} from '../../Paginator/Paginator';
import {FieldSearch} from '../../FieldSearch/FieldSearch';
import {DoubleRangeSelector} from '../../DoubleRangeSelector/DoubleRangeSelector';

type PropsType = {
    userId: string
    packsData: GetPacksResponseType
    isBusy: boolean
    error: string
    sortPress: (sortString: string) => void
    sortName: string
    addPress: () => void
    delPress: (id: string, name: string) => void
    updatePress: (id: string, name: string) => void
}

export function Packs(props: PropsType) {
    const sortButton = (sortParameter: string, buttonName: string, title: string) => {
        return (
            <SuperButton
                className={s.buttonSort + ' ' + (sortParameter === props.sortName ? s.buttonSortActive : '')}
                onClick={() => props.sortPress(sortParameter)}
                title={title}
                disabled={props.isBusy}
            >
                {buttonName}
            </SuperButton>
        )
    }

    const sortButtons = (sortParameter: string) => {
        return (
            <>
                {sortButton('1' + sortParameter, '<', 'Sort Ascending')}
                {sortButton('0' + sortParameter, '>', 'Sort Descending')}
            </>
        )
    }

    return (
        <div className={s.main}>
            <div className={s.titleProgressError}>
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
                        <FieldSearch searchField={'PackName'} nameText={'Name search:'}/>
                    </div>
                    <div className={s.headBlockRight}>
                        <DoubleRangeSelector packs={true} nameText={'Cards count:'}/>
                    </div>
                </div>


                <TableLinePack
                    head={true}
                    isBusy={props.isBusy}
                    nameFieldName={'Name'}
                    nameFieldLink={''}
                    nameFieldButtons={sortButtons('name')}
                    cardsCountField={'Cards count'}
                    cardsCountFieldButtons={sortButtons('cardsCount')}
                    updatedField={'Updated'}
                    updatedFieldButtons={sortButtons('updated')}
                    buttonsFieldName={'Actions: '}
                    buttonsFieldButtons={
                        <SuperButton
                            onClick={props.addPress}
                            disabled={props.isBusy}
                        >Add</SuperButton>
                    }
                />

                {
                    props.packsData.cardPacks &&
                    props.packsData.cardPacks.map(c =>
                        <TableLinePack
                            key={c._id}
                            head={false}
                            isBusy={props.isBusy}
                            nameFieldName={c.name}
                            nameFieldLink={c._id}
                            nameFieldButtons={<></>}
                            cardsCountField={'' + c.cardsCount}
                            cardsCountFieldButtons={[]}
                            updatedField={c.updated.substr(0, 10) + ' ' + c.updated.substr(11, 8)}
                            updatedFieldButtons={<></>}
                            buttonsFieldName={''}
                            buttonsFieldButtons={
                                <div>
                                    <SuperButton
                                        className={s.buttonActions}
                                        onClick={() => props.delPress(c._id, c.name)}
                                        disabled={props.isBusy || c.user_id !== props.userId}
                                    >Del</SuperButton>
                                    <SuperButton
                                        className={s.buttonActions}
                                        onClick={() => props.updatePress(c._id, c.name)}
                                        disabled={props.isBusy || c.user_id !== props.userId}
                                    >Update</SuperButton>
                                    <SuperButton
                                        // onClick={}
                                        disabled={props.isBusy}
                                    >Learn</SuperButton>
                                </div>
                            }
                        />
                    )
                }

                <div className={s.footBlocks}>
                    <div className={s.footBlockLeft}>
                        <MyPacksCheckBox/>
                        <PerPage packs={true} nameText={'Packs per page:'}/>
                    </div>
                    <div className={s.footBlockRight}>
                        <Paginator packs={true}/>
                    </div>
                </div>
            </div>

        </div>
    )
}