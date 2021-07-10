import React from 'react'

import {Link} from 'react-router-dom';

import style from '../style/header.module.css';

export default function Header() {
    return (
        <div className={style.Header}>
            <Link to="/explore">
                <img src="/images/search.png" alt="search-png" />
            </Link>
            <div className={style.navItems}>
                <Link to="/friends_invite">
                    <img src="/images/invite.png" alt="invite-png" />
                </Link>
                <Link to="/upcoming">
                    <img src="/images/calendar.png" alt="calender-png" />
                </Link>
                <Link to="/activity">
                    <img src="/images/noti.png" alt="noti-png" />
                </Link>
                <Link to="/profile">
                    <img src="/images/b1.png" alt="b1-png" />
                </Link>
            </div>
        </div>
    )
}
