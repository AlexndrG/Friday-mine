import React from 'react';
import s from './TableLine.module.css';

type PropsType = {
    head: boolean
    nameField: string
    cardsCountField: string
    updatedField: string
    buttonsField: string
}

export function TableLine(props: PropsType) {
    let tableStyle = {borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', width: '100%'}
    let cellStyle = {padding: '3px'}
    if (props.head) {
        tableStyle = {borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', width: '100%'}
        cellStyle = {padding: '6px'}
    }

    return (
        // <table style={{borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', width: '100%'}}>
        <table style={tableStyle}>
            <tr>
                <td width={'50%'} style={cellStyle}>
                    {props.nameField}
                </td>
                <td width={'10%'} style={{textAlign: 'center', ...cellStyle}}>
                    {props.cardsCountField}
                </td>
                <td width={'20%'} style={cellStyle}>
                    {props.updatedField}
                </td>
                <td width={'20%'} style={cellStyle}>
                    {props.buttonsField}
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