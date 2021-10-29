import React from 'react';
import s from './Packs.module.css'
import {Loader} from '../../Loader/Loader';
import {GetPacksResponseType} from '../../../dal/packs-api';
import {TableLinePack} from '../../TableLinePack/TableLinePack';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {PacksPerPage} from '../../PacksPerPage/PacksPerPage';
import {MyPacksCheckBox} from '../../MyPacksCheckBox/MyPacksCheckBox';
import {Paginator} from '../../Paginator/Paginator';

type PropsType = {
    userId: string
    packs: GetPacksResponseType
    isBusy: boolean
    error: string
    addPress: () => void
    delPress: (id: string) => void
    updatePress: (id: string) => void
}

export function Packs(props: PropsType) {
    return (
        <div className={s.main}>
            <h1>Packs</h1>

            <div className={s.form}>

                <TableLinePack
                    head={true}
                    nameFieldName={'Name'}
                    nameFieldLink={''}
                    cardsCountField={'Cards count'}
                    updatedField={'Updated'}
                    buttonsFieldName={'Actions: '}
                    buttonsFieldButtons={
                        [
                            <SuperButton
                                onClick={props.addPress}
                                disabled={props.isBusy}
                            >add</SuperButton>
                        ]
                    }
                />

                {
                    props.packs.cardPacks &&
                    props.packs.cardPacks.map(c =>
                        <TableLinePack
                            key={c._id}
                            head={false}
                            nameFieldName={c.name}
                            nameFieldLink={c._id}
                            cardsCountField={'' + c.cardsCount}
                            updatedField={c.updated}
                            buttonsFieldName={''}
                            buttonsFieldButtons={
                                [
                                    <SuperButton
                                        onClick={() => props.delPress(c._id)}
                                        disabled={props.isBusy || c.user_id !== props.userId}
                                    >del</SuperButton>,
                                    <SuperButton
                                        onClick={() => props.updatePress(c._id)}
                                        disabled={props.isBusy || c.user_id !== props.userId}
                                    >update</SuperButton>
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


            {props.isBusy &&
            <div>
                <Loader/>
            </div>}

            {props.error &&
            <div className={s.error}>
                {props.error}
            </div>}

        </div>
    )
}