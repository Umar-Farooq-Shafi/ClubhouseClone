import React from 'react'

import { FcGlobe } from 'react-icons/fc';

import style from '../../style/bottomSheet.module.css';

export default function StartRoom({
    setSheetCreateRoom, setSheetVisible
}) {
    const [room, setRoom] = React.useState('open');

    return (
        <div className={style.switchLine}>
            <div className="text-right">
                <button className={style.addTopicBtn}>+ Add a topic</button>
            </div>
            <div className={style.selectRoom}>
                <button
                    className={room === 'open' ? style.active : ''}
                    onClick={() => setRoom('open')}>
                    <div>
                        <FcGlobe />
                    </div>
                    Open
                </button>
                <button
                    className={room === 'social' ? style.active : ''}
                    onClick={() => setRoom('social')}>
                    <div>
                        <FcGlobe />
                    </div>
                    Social
                </button>
                <button
                    className={room === 'closed' ? style.active : ''}
                    onClick={() => setRoom('closed')}>
                    <div>
                        <FcGlobe />
                    </div>
                    Closed
                </button>
            </div>

            <p>
                Start a room <span>{room === 'closed' ?
                    'for people I choose.' : room === 'social' ?
                        'with people I follow.' : 'for everyone.'}</span>
            </p>
            <div className="text-center">
                <button className={style.letGoBtn}
                onClick={_ => {
                    setSheetCreateRoom(true);
                    setSheetVisible(true);
                }}>Let's go</button>
            </div>
        </div>
    )
}
