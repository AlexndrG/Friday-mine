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

/*
логинизация
регистрация
профайл
404 (можно застилизовать заранее)
восстановление пароля
ввод нового пароля
тестовая - отобразить/продемонстрировать все SuperКомпоненты
 */

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    PASSWORD_RESTORE: '/pwd-restore',
    PASSWORD_NEW: '/pwd-new/:token',
    PACKS: '/packs',
    CARDS: '/cards/:cardsPackId'
}


export function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <ProfileContainer/>}/>

                <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterContainer/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
                <Route path={PATH.PASSWORD_RESTORE} render={() => <PwdRestoreContainer/>}/>
                <Route path={PATH.PASSWORD_NEW} render={() => <PwdNewContainer/>}/>
                <Route path={PATH.PACKS} render={() => <PacksContainer/>}/>
                <Route path={PATH.CARDS} render={() => <CardsContainer/>}/>

                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}
