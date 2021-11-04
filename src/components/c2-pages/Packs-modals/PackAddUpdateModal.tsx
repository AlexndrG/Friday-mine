import React, {useState} from 'react';
import s from './PackAddUpdateModal.module.css'
import SuperInputText from '../../c1-common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {useDispatch} from 'react-redux';

type PropsType = {
    add: boolean
    id: string
    name: string
    setActive: (active: boolean) => void
    // dispatchFunction: ((name: string) => void) | ((id: string, name: string) => void)
    dispatchFunction: Function
}

export function PackAddUpdateModal(props: PropsType) {
    const dispatch = useDispatch()

    const [value, setValue] = useState(props.name)

    return (
        <div>
            Pack name: &nbsp;
            <SuperInputText
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
            />
            <p/>
            <div className={s.modalCenter}>
                <SuperButton
                    onClick={
                        () => {
                            props.setActive(false)
                            if (props.add) {
                                dispatch(props.dispatchFunction(value))
                            } else {
                                dispatch(props.dispatchFunction(props.id, value))
                            }
                        }
                    }
                >
                    OK
                </SuperButton>
                <SuperButton
                    onClick={() => props.setActive(false)}
                >
                    Cancel
                </SuperButton>
            </div>
        </div>
    )
}
