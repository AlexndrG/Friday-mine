import React, {useState} from 'react';
import s from './Learn.module.css'
import {Loader} from '../../Loader/Loader';
import {CardInfo, getRandomLearnCardAC, setGradeTC} from '../../../bll/learnReducer';
import {LearnCard} from '../../LearnCard/LearnCard';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';
import {useDispatch} from 'react-redux';

type PropsType = {
    isBusy: boolean
    error: string
    currentLearnCard: CardInfo
}

const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5']

export function Learn(props: PropsType) {
    const dispatch = useDispatch()

    const [closedAnswer, setClosedAnswer] = useState(true)

    const nextPress = () => {
        setClosedAnswer(true)
        dispatch(getRandomLearnCardAC())
    }


    return (
        <div className={s.main}>
            <div className={s.titleProgressError}>
                <h1>Learn</h1>
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

            {
                // !props.isBusy &&
                <div className={s.form}>
                    <div className={s.buttons}>
                        <SuperButton
                            onClick={() => setClosedAnswer(false)}
                            disabled={props.isBusy || !closedAnswer}>
                            Show answer
                        </SuperButton>

                        <SuperButton
                            onClick={nextPress}
                            disabled={props.isBusy}>
                            Next card
                        </SuperButton>
                    </div>

                    <div className={s.grades}>
                        {
                            grades.map((g, i) =>
                                <SuperButton
                                    key={g}
                                    onClick={() => {
                                        dispatch(setGradeTC(i + 1, props.currentLearnCard.cardId))
                                        nextPress()
                                    }}
                                    disabled={props.isBusy || closedAnswer}>
                                    {g}
                                </SuperButton>
                            )
                        }
                    </div>


                    <div className={s.cards}>
                        <LearnCard
                            closed={false}
                            nameText={'Question:'}
                            bodyText={props.isBusy ? '' : props.currentLearnCard.question}
                        />
                        <LearnCard
                            closed={closedAnswer}
                            nameText={'Answer:'}
                            bodyText={props.currentLearnCard.answer}
                        />
                    </div>

                </div>

            }
        </div>
    )
}