import React, {ReactNode} from 'react';
import s from './TableLineCard.module.css';

type PropsType = {
    head: boolean
    questionField: string
    questionFieldButtons: ReactNode
    answerField: string
    answerFieldButtons: ReactNode
    gradeField: string
    gradeFieldButtons: ReactNode
    updatedField: string
    updatedFieldButtons: ReactNode
    buttonsFieldName: string
    buttonsFieldButtons: ReactNode
}

export function TableLineCard(props: PropsType) {
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
                <td width={'20%'} style={{...cellStyle, textAlign: props.head ? 'center' : 'left'}}>
                    {props.questionField}
                    {props.head && props.questionFieldButtons}
                </td>
                <td width={'35%'} style={{...cellStyle, textAlign: props.head ? 'center' : 'left'}}>
                    {props.answerField}
                    {props.head && props.answerFieldButtons}
                </td>
                <td width={'15%'} style={cellStyle}>
                    {props.gradeField}
                    {props.head && props.gradeFieldButtons}
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