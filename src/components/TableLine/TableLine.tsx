import React, {ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import s from './TableLine.module.css';


type PropsType = {
    head: boolean
    nameFieldName: string
    nameFieldLink: string
    cardsCountField: string
    updatedField: string
    buttonsFieldName: string
    buttonsFieldButtons: ReactNode[]

}

export function TableLine(props: PropsType) {
    let tableStyle: { [key: string]: string } = {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        width: '100%',
    }
    let cellStyle: { [key: string]: string } = {
        padding: '3px',
    }

    if (props.head) {
        // tableStyle = {borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', width: '100%'}
        tableStyle = {...tableStyle, borderWidth: '2px'}
        cellStyle = {padding: '10px', textAlign: 'center'}
    }

    return (
        // <table style={{borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', width: '100%'}}>
        <table style={tableStyle}>
            <tr>
                <td width={'50%'} style={cellStyle}>
                    {props.head && props.nameFieldName}
                    {!props.head && <NavLink to={'cards/' + props.nameFieldLink}>{props.nameFieldName}</NavLink>}
                </td>
                <td width={'10%'} style={{textAlign: 'center', ...cellStyle}}>
                    {props.cardsCountField}
                </td>
                <td width={'20%'} style={cellStyle}>
                    {props.updatedField}
                </td>
                <td width={'20%'} style={cellStyle}>
                    {props.buttonsFieldName}
                    {props.buttonsFieldButtons}
                </td>
            </tr>
        </table>
    )
}

/*
    <div className={s.item + ' ' + (props.head ? s.tableHead : s.tableLine)} style={{minWidth: '50%', borderWidth: '1px'}}>
        {props.nameField}
    </div>
    <div className={s.item + ' ' + (props.head ? s.tableHead : s.tableLine)} style={{minWidth: '10%', borderWidth: '1px 1px 1px 0', textAlign: 'center'}}>
        {props.cardsCountField}
    </div>
    <div className={s.item + ' ' + (props.head ? s.tableHead : s.tableLine)} style={{minWidth: '20%', borderWidth: '1px 0'}}>
        {props.updatedField}
    </div>
    <div className={s.item + ' ' + (props.head ? s.tableHead : s.tableLine)} style={{minWidth: '20%', borderWidth: '1px'}}>
       {props.buttonsField}
    </div>
*/