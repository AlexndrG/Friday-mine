import React from 'react';
import s from './SuperNavLink.module.css'
import {NavLink} from 'react-router-dom';

type PropsType = {
    goTo: string
    text: string
    padding?: string
    margin?: string
    border?: string
}

export function SuperNavLink(props: PropsType) {
    return (
        <NavLink
            className={s.item}
            to={props.goTo}
            style={{
                padding: `${props.padding || '5px'}`,
                margin: `${props.margin || '5px'}`,
                border: `${props.border || '1px solid green'}`,
            }}
        >
            {props.text}
        </NavLink>
    )
}