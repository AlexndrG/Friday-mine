import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './DoubleRangeCardsCount.module.css'
import SuperRange from '../c1-common/c7-SuperRange/SuperRange';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {GetPacksResponseType} from '../../dal/packs-api';
import {setRangeSearchAC} from '../../bll/packsReducer';

export function DoubleRangeCardsCount() {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)
    const packsData = useSelector<AppRootStateType, GetPacksResponseType>(state => state.packs.packsData)
    const {minCardsCount, maxCardsCount} = packsData
    const minValue = useSelector<AppRootStateType, number | undefined>(state => state.packs.requestPacksData.min) || 0
    let maxValue = useSelector<AppRootStateType, number | undefined>(state => state.packs.requestPacksData.max) || 0
    const dispatch = useDispatch()

    if (maxValue === 0) {
        maxValue = maxCardsCount
    }
    const [minRangeValue, setMinRangeValue] = useState(minValue)
    const [maxRangeValue, setMaxRangeValue] = useState(maxValue)

    useEffect(() => {
        if (minRangeValue !== minValue) {
            setMinRangeValue(minValue)
        }
        if (maxRangeValue !== maxValue) {
            setMaxRangeValue(maxValue)
        }
    }, [minValue, maxValue])

    useEffect(() => {
        /*
                setMinRangeValue(minCardsCount)
                setMaxRangeValue(maxCardsCount)
                if (minCardsCount !== minValue || maxCardsCount > maxValue) {
                    dispatch(setRangeSearchAC(minCardsCount, maxCardsCount))
                }
                */

        let sortFlag = false
        if (minRangeValue > maxCardsCount) {
            setMinRangeValue(minCardsCount)
            sortFlag = true
        }
        if (maxRangeValue > maxCardsCount) {
            setMaxRangeValue(maxCardsCount)
            sortFlag = true
        }
        if (sortFlag) {
            dispatch(setRangeSearchAC(minCardsCount, maxCardsCount))
        }
    }, [minCardsCount, maxCardsCount])


    const minRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const min = +e.currentTarget.value
        let max = maxRangeValue
        if (min > max) {
            max = min
            setMaxRangeValue(max)
        }
        setMinRangeValue(min)
    }

    const maxRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        let min = minRangeValue
        const max = +e.currentTarget.value
        if (max < min) {
            min = max
            setMinRangeValue(min)
        }
        setMaxRangeValue(max)
    }

    const setNewRange = () => {
        if (minValue !== minRangeValue || maxValue !== maxRangeValue) {
            dispatch(setRangeSearchAC(minRangeValue, maxRangeValue))
        }
    }


    return (
        <div className={s.form}>
            Cards count: &nbsp;
            <b>{minCardsCount}</b>
            <SuperRange
                className={s.superRange}
                min={minCardsCount}
                max={maxCardsCount}
                value={minRangeValue}
                disabled={isBusy}
                onChange={minRangeChange}
                onMouseUp={setNewRange}
            />
            <span className={s.rangeValue}>{minRangeValue}</span>
            {':'}
            <span className={s.rangeValue}>{maxRangeValue}</span>
            <SuperRange
                className={s.superRange}
                min={minCardsCount}
                max={maxCardsCount}
                value={maxRangeValue}
                disabled={isBusy}
                onChange={maxRangeChange}
                onMouseUp={setNewRange}
            />
            <b>{maxCardsCount}</b>
        </div>
    )
}