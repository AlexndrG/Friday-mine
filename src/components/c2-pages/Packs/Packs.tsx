import React from 'react';
import s from './Packs.module.css'
import {Loader} from '../../Loader/Loader';
import {GetPacksResponseType} from '../../../dal/packs-api';
import {TableLine} from '../../TableLine/TableLine';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import { PacksPerPage } from '../../PacksPerPage/PacksPerPage';

type PropsType = {
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

                <TableLine
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
                        <TableLine
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
                                        onClick={()=>props.delPress(c._id)}
                                        disabled={props.isBusy}
                                    >del</SuperButton>,
                                    <SuperButton
                                        onClick={()=>props.updatePress(c._id)}
                                        disabled={props.isBusy}
                                    >update</SuperButton>
                                ]
                            }
                        />
                    )
                }

                <PacksPerPage/>
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