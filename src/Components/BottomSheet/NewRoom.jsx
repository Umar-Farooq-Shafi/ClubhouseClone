import React from 'react'

import {AiOutlineFile, AiOutlinePlus} from 'react-icons/ai'
import {BsMicMuteFill, BsMicFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import style from '../../style/roomDetail.module.css';

export default function NewRoom({cardDetail, setSheetVisible}) {
    const [micMuteVisible, setMicMuteVisible] = React.useState(true);
    const [itemsVisible, setItemsVisible] = React.useState(true);

    return (
        <>
         <div className={style.roomDetailContainer}>
             <div className={style.head}>
                <div className="d-flex align-items-center">
                    <Link to="#" onClick={() => {
                        setSheetVisible(false);
                    }}>
                        <img src="/images/arrow.png" alt="arrow-png" 
                            className={style.arrowIcon}
                        />
                    </Link>
                    <span>Hallway</span>
                </div>
                <div>
                    <AiOutlineFile />
                    <img src="/images/user-img.jpg" alt="user-img" 
                        className={style.profileImg}
                    />
                </div>
             </div>

             <div className={style.roomDetailCard}>
                    <div 
                    style={{padding: '0.5em 1em'}}
                    className="d-flex align-items-center flex-wrap justify-content-between">
                        {cardDetail?.members.map((c, i) => (
                            <div className={style.memberContainer} key={i}>
                                {micMuteVisible ? (
                                    <div className={style.audioIcon}>
                                        <BsMicMuteFill />
                                    </div>
                                ) : ""}
                                <img src="/images/user-img.jpg" alt="user-img" />
                                <p>
                                    <span>*</span>
                                    {c.first_name}
                                </p>
                            </div>
                        ))}
                    </div>
             </div>

             <div className={style.footer}>
                <button onClick={() => {
                    setSheetVisible(false);
                }}>
                    <img src="/images/hand-peace.png" alt="hand-png" />
                </button>
                <div>
                    <button>
                        <AiOutlinePlus/>
                    </button>
                    <button>
                        <img src="/images/stopHandIcon.png" alt="stopHand_png" />
                    </button>

                    <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                        {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
                    </button>
                </div>
             </div>
         </div>   
        </>
    )
}
