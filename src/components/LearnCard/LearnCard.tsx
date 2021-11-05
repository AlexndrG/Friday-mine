import React from 'react';
import s from './LearnCard.module.css';

type PropsType = {
    closed: boolean
    nameText: string
    bodyText: string
}

export function LearnCard(props: PropsType) {
    return (
        <div className={s.main}>
            <div className={s.form + (props.closed ? ' ' + s.closed : '')}>
                <b>{props.nameText}</b>
                <p/>
                {props.bodyText}
            </div>
        </div>
    )
}