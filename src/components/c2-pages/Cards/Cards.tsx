import React from 'react';
import s from './Cards.module.css'
import {Loader} from '../../Loader/Loader';
import {GetCardsResponseType} from '../../../dal/cards-api';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {TableLineCard} from '../../TableLineCard/TableLineCard';
import {PerPage} from '../../PerPage/PerPage';
import {Paginator} from '../../Paginator/Paginator';
import {FieldSearch} from '../../FieldSearch/FieldSearch';
import {DoubleRangeSelector} from '../../DoubleRangeSelector/DoubleRangeSelector';

type PropsType = {
    userId: string
    cardsData: GetCardsResponseType
    isBusy: boolean
    error: string
    sortPress: (sortString: string) => void
    sortName: string
    addPress: () => void
    delPress: (id: string, question: string) => void
    updatePress: (id: string, question: string, answer: string) => void
}

export function Cards(props: PropsType) {
    const sortButton = (sortParameter: string, buttonName: string, title: string) => {
        return (
            <SuperButton
                className={s.buttonSort + ' ' + (sortParameter === props.sortName ? s.buttonSortActive : '')}
                onClick={() => props.sortPress(sortParameter)}
                title={title}
                disabled={props.isBusy}
            >
                {buttonName}
            </SuperButton>
        )
    }

    const sortButtons = (sortParameter: string) => {
        return (
            <>
                {sortButton('1' + sortParameter, '<', 'Sort Ascending')}
                {sortButton('0' + sortParameter, '>', 'Sort Descending')}
            </>
        )
    }

    return (
        <div className={s.main}>
            <div className={s.titleProgressError}>
                <h1>Cards</h1>
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

                <div className={s.headBlocks}>
                    <div className={s.headBlockLeft}>
                        <FieldSearch searchField={'CardQuestion'} nameText={'Question search:'}/>
                        <FieldSearch searchField={'CardAnswer'} nameText={'Answer search:'}/>
                    </div>
                    <div className={s.headBlockRight}>
                        <DoubleRangeSelector packs={false} nameText={'Grades:'}/>
                    </div>
                </div>

                {
                    props.cardsData.cards &&
                    <TableLineCard
                        head={true}
                        questionField={'Question'}
                        questionFieldButtons={sortButtons('question')}
                        answerField={'Answer'}
                        answerFieldButtons={sortButtons('answer')}
                        gradeField={'Grade'}
                        gradeFieldButtons={sortButtons('grade')}
                        updatedField={'Updated'}
                        updatedFieldButtons={sortButtons('updated')}
                        buttonsFieldName={'Actions: '}
                        buttonsFieldButtons={
                            [
                                <SuperButton
                                    onClick={props.addPress}
                                    disabled={props.isBusy || props.cardsData.packUserId !== props.userId}
                                >Add</SuperButton>,
                            ]
                        }
                    />
                }

                {
                    props.cardsData.cards &&
                    props.cardsData.cards.map(c =>
                        <TableLineCard
                            key={c._id}
                            head={false}
                            questionField={c.question}
                            questionFieldButtons={<></>}
                            answerField={c.answer}
                            answerFieldButtons={<></>}
                            gradeField={'' + c.grade}
                            gradeFieldButtons={<></>}
                            updatedField={c.updated.substr(0, 10) + ' ' + c.updated.substr(11, 8)}
                            updatedFieldButtons={<></>}
                            buttonsFieldName={''}
                            buttonsFieldButtons={
                                <div>
                                    <SuperButton
                                        className={s.buttonActions}
                                        onClick={() => props.delPress(c._id, c.question)}
                                        disabled={props.isBusy || props.cardsData.packUserId !== props.userId}
                                    >Del</SuperButton>
                                    <SuperButton
                                        className={s.buttonActions}
                                        onClick={() => props.updatePress(c._id, c.question, c.answer)}
                                        disabled={props.isBusy || props.cardsData.packUserId !== props.userId}
                                    >Update</SuperButton>
                                </div>
                            }
                        />
                    )
                }

                <div className={s.footBlocks}>
                    <div className={s.footBlockLeft}>
                        <PerPage packs={false} nameText={'Cards per page:'}/>
                    </div>
                    <div className={s.footBlockRight}>
                        <Paginator packs={false}/>
                    </div>
                </div>

            </div>
        </div>
    )
}