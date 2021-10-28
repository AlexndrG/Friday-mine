import React from 'react';
import s from './Packs.module.css'
import {Loader} from '../../Loader/Loader';
import {GetPacksResponseType} from '../../../dal/packs-api';
import {TableLine} from '../TableLine/TableLine';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';

type PropsType = {
    packs: GetPacksResponseType
    isBusy: boolean
    error: string
}

export function Packs(props: PropsType) {
    return (
        <div className={s.main}>
            <h1>Packs</h1>

            <div className={s.form}>

                <TableLine
                    head={true}
                    nameField={'Name'}
                    cardsCountField={'Cards count'}
                    updatedField={'Updated'}
                    buttonsField={'Actions'}
                    // buttonsFieldName={'Actions'}
                    // buttonsFieldButtons={[<SuperButton>add</SuperButton>]}
                />

                {
                    props.packs.cardPacks &&
                    props.packs.cardPacks.map(c =>
                        <TableLine
                            head={false}
                            nameField={c.name}
                            cardsCountField={'' + c.cardsCount}
                            updatedField={c.updated}
                            buttonsField={'none'}/>
                    )
                }
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