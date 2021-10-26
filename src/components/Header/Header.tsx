import React from 'react';
import {PATH} from '../c2-pages/Routes/Routes';
import {SuperNavLink} from '../c1-common/c91-SuperNavLink/SuperNavLink';

type PropsType = {
    isLogined: boolean
    isRestoring: boolean
}

export function Header({isLogined, isRestoring}: PropsType) {
    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'red'}}>FRIDAY</h1>

            {!isLogined && <SuperNavLink goTo={PATH.LOGIN} text={'Login page'}/>}

            {!isLogined && <SuperNavLink goTo={PATH.REGISTER} text={'Register page'}/>}

            {isLogined && <SuperNavLink goTo={PATH.PROFILE} text={'Profile page'}/>}

            {!isRestoring &&
            <SuperNavLink goTo={PATH.PASSWORD_RESTORE} text={'Restore password page'} border={'2px solid blue'}/>}
        </div>
    )
}