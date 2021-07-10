import React from 'react'

import {Link} from 'react-router-dom';

import style from '../style/explore.module.css';

export default function SubHeader({pageTitle}) {
    return (
        <div className={style.head}>
        <Link to="/home">
            <img src="/images/arrow.png" alt="arrow-img" />
        </Link>
        <h3>{pageTitle}</h3>  
        </div>
    )
}
