import React from 'react';
import s from './Cards.module.css'
import {Loader} from '../../Loader/Loader';
import {GetCardsResponseType} from '../../../dal/cards-api';

type PropsType = {
    cards: GetCardsResponseType
    isBusy: boolean
    error: string
}

export function Cards(props: PropsType) {
    return (
        <div className={s.main}>
            <h1>Cards</h1>

            <div className={s.form}>

                {JSON.stringify(props.cards.cards)}

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