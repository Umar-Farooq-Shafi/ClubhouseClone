import React from 'react';

import { Link } from 'react-router-dom';

import style from '../style/phoneConfirm.module.css';

export default function CodeConfirm() {
    return (
        <div className={style.phoneConfirmationContainer}>
            <Link to="/get_username" className={style.backBtn}>
                <img src="/images/arrow.png" alt="back-img" />
            </Link>
            <div className="text-center">
                <h1 style={{ width: '100%', maxWidth: '200px', marginBottom: '1em' }}>
                    Enter the code
                </h1>
                <input type="text" style={{
                    width: '100%', border: 'none',
                    textAlign: 'center', outline: 'none'
                }} />
                <p className="mt-2">Didn't receive it? <span>Tap to recent</span></p>
            </div>
            <Link to="/allow_notification" className="primaryBtn d-flex align-items-center">
                Next <img src="/images/nextArrowIcon.svg" alt="next-img" className="ml-1" />
            </Link>
        </div>
    )
}
