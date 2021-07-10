import React from 'react'

import { AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs';

import { Link } from 'react-router-dom';

import exploreStyle from '../style/explore.module.css';
import style from '../style/profile.module.css';

export default function Profile() {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-right mb-0`}>
                        <Link to="/home">
                            <img src="/images/arrow.png" alt="arrow-img"
                                className={exploreStyle.arrowIcon} />
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img src="/images/user-img.jpg" alt="usr-jpg" className={style.profileImg} />
                <h4>Zayn</h4>
                <p>@blessedzayn</p>
                <div className={style.follow}>
                    <p>
                        <span>0</span> followers
                    </p>
                    <p><span>51</span> following</p>
                </div>
                <button>Add a bio.</button>
                <div className="mb-4">
                    <button className="mb-0"><AiOutlineTwitter /> Add twitter.</button>
                    <button className="mb-0"><AiOutlineInstagram /> Add instagram.</button>
                </div>

                <div className={style.nominated}>
                    <img src="/images/user-img.jpg" alt="usr-img" />
                    <div>
                        <p>Joined 21. 2021</p>
                        <p>Nominated by <span>Anton</span></p>
                    </div>
                </div>

                <p>Member of</p>
                <button className={style.addMemberBtn}><BsPlus /></button>
            </div>

        </>
    )
}
