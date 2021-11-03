import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './DoubleRangeSelector.module.css'
import SuperRange from '../c1-common/c7-SuperRange/SuperRange';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {GetPacksResponseType} from '../../dal/packs-api';
import {setRangeSearchAC} from '../../bll/packsReducer';
import {GetCardsResponseType} from '../../dal/cards-api';

type PropsType = {
    packs: boolean
    nameText: string
}

export function DoubleRangeSelector(props: PropsType) {
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.app.isBusy)

    const packsData = useSelector<AppRootStateType, GetPacksResponseType>(state => state.packs.packsData)
    const packsMinCardsCount = packsData.minCardsCount
    const packsMaxCardsCount = packsData.maxCardsCount
    const packsMinValue = useSelector<AppRootStateType, number | undefined>(state => state.packs.requestPacksData.min) || 0
    const packsMaxValue = useSelector<AppRootStateType, number | undefined>(state => state.packs.requestPacksData.max) || 0

    const cardsData = useSelector<AppRootStateType, GetCardsResponseType>(state => state.cards.cardsData)
    const cardsMinGrade = cardsData.minGrade
    const cardsMaxGrade = cardsData.maxGrade
    const cardsMinValue = useSelector<AppRootStateType, number | undefined>(state => state.cards.requestCardsData.min) || 0
    const cardsMaxValue = useSelector<AppRootStateType, number | undefined>(state => state.cards.requestCardsData.max) || 0

    const dispatch = useDispatch()

    // packs
    let minSortValue = packsMinValue
    let maxSortValue = packsMaxValue
    let minCount = packsMinCardsCount
    let maxCount = packsMaxCardsCount

    // cards
    if (!props.packs) {
        minSortValue = cardsMinValue
        maxSortValue = cardsMaxValue
        minCount = Math.floor(cardsMinGrade)
        maxCount = Math.ceil(cardsMaxGrade)
        console.log('cards: ', cardsMinValue, cardsMaxValue, cardsMinGrade, cardsMaxGrade)
    }

    if (maxSortValue === 0) {
        maxSortValue = maxCount
    }
    const [minRangeValue, setMinRangeValue] = useState(minSortValue)
    const [maxRangeValue, setMaxRangeValue] = useState(maxSortValue)

    useEffect(() => {
        if (minRangeValue !== minSortValue) {
            setMinRangeValue(minSortValue)
        }
        if (maxRangeValue !== maxSortValue) {
            setMaxRangeValue(maxSortValue)
        }
    }, [minSortValue, maxSortValue])

    useEffect(() => {
        let sortFlag = false
        if (minRangeValue > maxCount) {
            setMinRangeValue(minCount)
            sortFlag = true
        }
        if (maxRangeValue > maxCount) {
            setMaxRangeValue(maxCount)
            sortFlag = true
        }
        if (sortFlag) {
            dispatch(setRangeSearchAC(minCount, maxCount))
        }
    }, [minCount, maxCount])


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
        if (minSortValue !== minRangeValue || maxSortValue !== maxRangeValue) {
            if (maxRangeValue === 0) {
                setMaxRangeValue(maxCount)
            }
            dispatch(setRangeSearchAC(minRangeValue, maxRangeValue))
        }
    }


    return (
        <div className={s.form}>
            {props.nameText} &nbsp;
            <b>{minCount}</b>
            <SuperRange
                className={s.superRange}
                min={minCount}
                max={maxCount}
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
                min={minCount}
                max={maxCount}
                value={maxRangeValue}
                disabled={isBusy}
                onChange={maxRangeChange}
                onMouseUp={setNewRange}
            />
            <b>{maxCount}</b>
        </div>
    )
}