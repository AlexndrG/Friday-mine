import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Error404} from '../Error404/Error404';
import {ProfileContainer} from '../Profile/ProfileContainer';
import {PwdRestoreContainer} from '../PwdRestore/PwdRestoreContainer';
import {LoginContainer} from '../Login/LoginContainer';
import {RegisterContainer} from '../Register/RegisterContainer';
import {PwdNewContainer} from '../PwdNew/PwdNewContainer';
import {PacksContainer} from '../Packs/PacksContainer';
import {CardsContainer} from '../Cards/CardsContainer';
import {useDispatch} from 'react-redux';
import {setInitCardsDataAC} from '../../../bll/cardsReducer';
import {setInitPacksDataAC} from '../../../bll/packsReducer';
import {LearnContainer} from '../Learn/LearnContainer';
import {clearLearnDataAC} from '../../../bll/learnReducer';

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    PASSWORD_RESTORE: '/pwd-restore',
    PASSWORD_NEW: '/pwd-new/:token',
    PACKS: '/packs',
    CARDS: '/cards/:cardsPackId',
    LEARN: '/learn/:cardsPackId',
}


export function Routes() {
    const dispatch = useDispatch()

    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <ProfileContainer/>}/>

                {/*<Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>*/}
                <Route path={PATH.LOGIN} render={() => {
                    dispatch(setInitPacksDataAC())
                    return <LoginContainer/>
                }}/>

                <Route path={PATH.REGISTER} render={() => <RegisterContainer/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
                <Route path={PATH.PASSWORD_RESTORE} render={() => <PwdRestoreContainer/>}/>
                <Route path={PATH.PASSWORD_NEW} render={() => <PwdNewContainer/>}/>
                <Route path={PATH.PACKS} render={() => <PacksContainer/>}/>

                {/*<Route path={PATH.CARDS} render={() => <CardsContainer/>}/>*/}
                <Route path={PATH.CARDS} render={() => {
                    dispatch(setInitCardsDataAC())
                    return <CardsContainer/>
                }}/>

                {/*<Route path={PATH.LEARN} render={() => <LearnContainer/>}/>*/}
                <Route path={PATH.LEARN} render={() => {
                    dispatch(clearLearnDataAC())
                    return <LearnContainer/>
                }}/>

                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}
