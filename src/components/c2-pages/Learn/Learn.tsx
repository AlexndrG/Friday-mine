import React from 'react';
import s from './Learn.module.css'
import {Loader} from '../../Loader/Loader';

type PropsType = {
    isBusy: boolean
    error: string
}

export function Learn(props: PropsType) {
    return (
        <div className={s.main}>
            <div className={s.titleProgressError}>
                <h1>Learn</h1>
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



            </div>
        </div>
    )
}