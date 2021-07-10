import React from 'react';
import { Link } from 'react-router-dom';

import PhoneInput from 'react-phone-number-input';

import style from '../style/phoneConfirm.module.css';

export default function PhoneConfirmation() {
    const [value, setValue] = React.useState();

    return (
        <div className={style.phoneConfirmationContainer}>
            <Link exact to="/" className={style.backBtn}>
                <img src="/images/arrow.png" alt="logo" />
            </Link>
            <h1>Enter phone #</h1>
            <PhoneInput international defaultCountry="US" value={value}
                onChange={setValue} />
            <p>By entering you number you agree with
                <span> Terms of privacy Policy. </span>Thanks
            </p>
            <Link exact to="/code_confirm" className='primaryBtn d-flex align-items-center'>
                Next <img src="/images/nextArrowIcon.svg" className="ml-1" alt="next-img" />
            </Link>
        </div>
    )
}
