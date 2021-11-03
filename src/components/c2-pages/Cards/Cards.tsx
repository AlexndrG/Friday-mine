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

    addPress: () => void
    delPress: (id: string) => void
    updatePress: (id: string) => void
}

export function Cards(props: PropsType) {
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
                        // questionFieldButtons={sortButtons('question')}
                        answerField={'Answer'}
                        // answerFieldButtons={sortButtons('answer')}
                        gradeField={'Grade'}
                        // gradeFieldButtons={sortButtons('grade')}
                        updatedField={'Updated'}
                        // updatedFieldButtons={sortButtons('updated')}
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
                            // questionFieldButtons={sortButtons('question')}
                            answerField={c.answer}
                            // answerFieldButtons={sortButtons('answer')}
                            gradeField={'' + c.grade}
                            // gradeFieldButtons={sortButtons('grade')}
                            updatedField={c.updated.substr(0, 10) + ' ' + c.updated.substr(11, 8)}
                            // updatedFieldButtons={sortButtons('updated')}
                            buttonsFieldName={''}
                            buttonsFieldButtons={
                                [
                                    <SuperButton
                                        className={s.buttonActions}
                                        onClick={() => props.delPress(c._id)}
                                        disabled={props.isBusy || props.cardsData.packUserId !== props.userId}
                                    >Del</SuperButton>,
                                    <SuperButton
                                        className={s.buttonActions}
                                        onClick={() => props.updatePress(c._id)}
                                        disabled={props.isBusy || props.cardsData.packUserId !== props.userId}
                                    >Update</SuperButton>,
                                ]
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