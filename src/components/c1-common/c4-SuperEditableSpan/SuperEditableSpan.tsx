import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState, TextareaHTMLAttributes} from 'react'

import s from './SuperEditableSpan.module.css'
import SuperInputText from '../c1-SuperInputText/SuperInputText';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & DefaultTextAreaPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    spanProps?: DefaultSpanPropsType // пропсы для спана

    inputArea: boolean
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,

        inputArea,

        ...restProps// все остальные пропсы попадут в объект restProps
    }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterInputCallback = () => {
        setEditMode(false) // выключить editMode при нажатии Enter

        onEnter && onEnter()
    }
    const onBlurInputCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false) // выключить editMode при нажатии за пределами инпута

        onBlur && onBlur(e)
    }

    const onEnterTextAreaCallback = () => {
        setEditMode(false) // выключить editMode при нажатии Enter

        onEnter && onEnter()
    }
    const onBlurTextAreaCallback = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setEditMode(false) // выключить editMode при нажатии за пределами инпута

        onBlur && onBlur(e)
    }


    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true) // включить editMode при двойном клике

        onDoubleClick && onDoubleClick(e)
    }

    // const spanClassName = `${'сделать красивый стиль для спана'} ${className}`
    // const spanClassName = `${s.editableSpan}`
    const spanClassName =
        `${s.editableSpan}
         ${restProps.spanClassName ? s[restProps.spanClassName] : ''}
         ${className ? className : ''}`

    return (
        <>
            {editMode
                ? (
                    inputArea
                        ? <SuperInputText
                            className={s.superInputText}
                            autoFocus // пропсу с булевым значением не обязательно указывать true
                            onBlur={onBlurInputCallback}
                            onEnter={onEnterInputCallback}

                            {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                        />
                        : <textarea
                            className={s.textArea}
                            cols={75}
                            rows={10}
                            autoFocus // пропсу с булевым значением не обязательно указывать true
                            onBlur={onBlurTextAreaCallback}
                            // onEnter={onEnterTextAreaCallback}
                            value={restProps.value}
                            onChange={e => restProps.onChangeText(e.currentTarget.value)}
                        >
                        </textarea>
                )

                : (
                    <div>
                        <img
                            className={s.pen}
                            // src='https://cdn.shopify.com/s/files/1/0573/7352/4157/products/94.png'
                            src='https://iconarchive.com/download/i96727/iconsmind/outline/Pen.ico'
                            alt='pen'
                        />

                        <span
                            onDoubleClick={onDoubleClickCallBack}
                            className={spanClassName}

                            {...restSpanProps}
                        >
                {/*если нет захардкодженного текста для спана, то значение инпута*/}
                            {children || restProps.value}
                </span>
                    </div>
                )
            }
        </>
    )
}

export default SuperEditableSpan
