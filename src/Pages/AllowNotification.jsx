import React from 'react'

import {Link} from 'react-router-dom';

import style from '../style/phoneConfirm.module.css';

export default function AllowNotification() {
    return (
        <div className={style.phoneConfirmationContainer}>
            <div className="text-center">
                <h1 className="mb-4">Last, important step!</h1>
                <h1 className="mb-3">
                    Enable notification to stay connect.
                </h1>
                <div className={style.notificationContainer}>
                    <div className="p-3">
                        <h3>"Clubhouse" like to send you notification.</h3>
                        <p>Notification may include sound, alerts icons badges</p>
                    </div>
                    <div className={style.actionBtn}>
                        <Link to="/home">Don't allow</Link>
                        <Link to="/home">Allow</Link>
                        <img src="/images/handIcon.svg" alt="hand-icon" className={style.handIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}
