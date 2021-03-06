import React, {ReactNode} from 'react';
import s from './TableLinePack.module.css';
import {NavLink} from 'react-router-dom';


type PropsType = {
    head: boolean
    isBusy: boolean
    nameFieldName: string
    nameFieldLink: string
    nameFieldButtons: ReactNode
    cardsCountField: string
    cardsCountFieldButtons: ReactNode
    updatedField: string
    updatedFieldButtons: ReactNode
    buttonsFieldName: string
    buttonsFieldButtons: ReactNode
}

export function TableLinePack(props: PropsType) {
    let tableStyle: { [key: string]: string } = {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        width: '100%',
    }
    let cellStyle: { [key: string]: string } = {
        padding: '3px',
        textAlign: 'center',
        wordBreak: 'break-word',
    }

    if (props.head) {
        tableStyle = {...tableStyle, borderWidth: '2px'}
        cellStyle = {...cellStyle, padding: '10px'}
    }

    return (
        <table style={tableStyle}>
            <tbody>
            <tr>
                <td width={'55%'} style={{...cellStyle, textAlign: props.head ? 'center' : 'left'}}>
                    {props.head && props.nameFieldName}
                    {props.head && props.nameFieldButtons}
                    {!props.head && <NavLink to={props.isBusy ? '#' : ('cards/' + props.nameFieldLink)}>{props.nameFieldName}</NavLink>}
                </td>
                <td width={'15%'} style={cellStyle}>
                    {props.cardsCountField}
                    {props.head && props.cardsCountFieldButtons}
                </td>
                <td width={'15%'} style={cellStyle}>
                    {props.updatedField}
                    {props.head && props.updatedFieldButtons}
                </td>
                <td width={'15%'} style={cellStyle}>
                    {props.buttonsFieldName}
                    {props.buttonsFieldButtons}
                </td>
            </tr>
            </tbody>
        </table>
    )
}